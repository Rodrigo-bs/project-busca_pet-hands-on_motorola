import { Request, Response } from 'express';
import { Fur } from '../models/fur.model';
import { Op } from 'sequelize';

class FurController {
    public async findAll(req: Request, res: Response): Promise<Response> {
        const fur = await Fur.findAll();

        return res.json(fur);
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const fur = await Fur.findByPk(id);

        if (fur) {
            return res.json(fur);
        } else {
            return res.status(404).json({error: 'fur Not Found'});
        }
    }

    public async createNewFur(req: Request, res: Response): Promise<Response> {
        const fur = await Fur.create(req.body);
        
        return res.json(fur);
    }

    public async updateFur(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const fur = await Fur.update(req.body, { where: { id_fur: id } }); 

        return res.json(fur);
    }

    public async deleteFur(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const fur = await Fur.destroy({ where: {
            id_fur: {
                [Op.eq]: id
            }
        }});

        return res.json(fur);
    }
}

export default new FurController();