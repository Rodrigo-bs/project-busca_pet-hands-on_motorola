import { Request, Response } from 'express';
import { AD, ADModel } from '../models/ad.model';
import { Op, QueryTypes } from 'sequelize';
import  nodemailer from 'nodemailer';
import database from '../database';
import { ViewAD } from '../models/viewad.model';

class AdController {
    public constructor() {
        // Alocando a referencia do this da funcao createNewAd para a classe
        this.createNewAd = this.createNewAd.bind(this);
        this.sendAlertsToUsers = this.sendAlertsToUsers.bind(this);
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const ad = await AD.findAll();

        return res.json(ad);
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const ad = await AD.findByPk(id);

        if (ad) {
            return res.json(ad);
        } else {
            return res.status(404).json({error: 'Ad Not Found'});
        }
    }

    public async savePhoto(req: Request, res: Response): Promise<Response> {
        const idAd = req.params.id
        const file: any = req.file;

        const ad = await AD.update({
            ad_photos: file.filename
        }, {
            where: {
                id_ad: idAd
            } 
        });

        return res.json(file.filename);
    }

    public async createNewAd(req: Request, res: Response): Promise<Response> {
        req.body.ad_date_register = new Date();

        const ad = await AD.findOne({ where: {
            id_user_fk: req.body.id_user_fk,
            ad_is_register_in_db: 0,
        }});

        if (ad) {
            req.body.ad_is_register_in_db = 1;

            await ad?.update(req.body);

            const adLatitude: String = req.body.ad_latitude;
            const adLongitude: String = req.body.ad_longitude;

            const upcomingAds: ViewAD[] = await this.getNearbyAds(adLatitude, adLongitude);
            this.sendAlertsToUsers(upcomingAds, ad);

            return res.json(ad);
        } else {
            const newAD = await AD.create(req.body);
            return res.json(newAD);
        }
    }

    public async updateAd(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const ad = await AD.update(req.body, { where: { id_ad: id } }); 

        return res.json(ad);
    }

    public async deleteAd(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const ad = await AD.destroy({ where: {
            id_ad: {
                [Op.eq]: id
            }
        }});

        return res.json(ad);
    }

    public async getNearbyAds(adLatitude: String, adLongitude: String): Promise<ViewAD[]> {
        // Aplicando a formula Haversine
        const sql = `SELECT \`id_ad\`, \`title_ad\`, \`id_user_ad\`, \`email_user_ad\`,
            (
                6371 *
                acos(cos(radians(${adLatitude})) * 
                cos(radians(\`latitude_ad\`)) * 
                cos(radians(\`longitude_ad\`) - 
                radians(${adLongitude})) + 
                sin(radians(${adLatitude})) * 
                sin(radians(\`latitude_ad\`)))
            ) AS \`ad_distance\` FROM
                \`viewad\`
            HAVING
                \`ad_distance\` < .5;`;

        const upcomingAds: ViewAD[] = await database.query(
            sql, {
                model: ViewAD,
                type: QueryTypes.SELECT,
            }
        );

        return upcomingAds;
    }

    public async sendAlertsToUsers(ads: ViewAD[], newAd: ADModel) {
        ads.forEach((ad: ViewAD) => {
            const contentEmail = `
            <html>
                <head>
                <title>BuscaPet</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { font-family: sans-serif; background: #dddddd; }
                    .wrapper { max-width: 600px; display: block; margin: 0 auto; background: #ffffff; padding-bottom: 30px; }
                    h1 { font-size: 35px; color: #fff; background: #00856F; padding: 50px; text-align: center; }
                    p { font-size: 20px; padding: 10px; margin-bottom: 40px; text-align: center; color: #252525; }
                    a { font-size: 18px; text-transform: uppercase; font-weight: 700; padding: 10px 15px; display: block; background: #198754; width: fit-content; color: #ffffff; text-decoration: none; border-radius: 5px; margin: 0 auto; }
                </style>
                </head>
                <body>
                <div class="wrapper">
                    <h1>BuscaPet</h1>
                    <p>Um novo anúncio foi publicado pelas redondezas!</p>
                    <a href="${process.env.URL}visualizar/pet/${newAd.id_ad}">Visualizar</a>
                </div>
                </body>
                </html>
            `;

            const info = {
                from: `Busca Pet <${process.env.EMAIL_USER}}>`,
                to: [ad.email_user_ad],
                subject: `Novo Anúncio - ${newAd.ad_title}`,
                text: ad.title_ad,
                html: contentEmail
            };

            this.sendEmails(info);
        });
    }

    public async sendEmails(infoContent: object) {
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        try {
            await transporter.sendMail(infoContent);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default new AdController();