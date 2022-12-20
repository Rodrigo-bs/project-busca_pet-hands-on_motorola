import { Request, Response } from 'express';
import { Color } from '../models/color.model';
import { Op } from 'sequelize';

class ColorController {
    public async findAll(req: Request, res: Response): Promise<Response> {
        const color = await Color.findAll();

        return res.json(color);
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const color = await Color.findByPk(id);

        if (color) {
            return res.json(color);
        } else {
            return res.status(404).json({error: 'Color Not Found'});
        }
    }

    public async createNewColor(req: Request, res: Response): Promise<Response> {
        const color = await Color.create(req.body);
        
        return res.json(color);
    }

    public async updateColor(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const color = await Color.update(req.body, { where: { id_Color: id } }); 

        return res.json(color);
    }

    public async deleteColor(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const color = await Color.destroy({ where: {
            id_Color: {
                [Op.eq]: id
            }
        }});

        return res.json(color);
    }
}

export default new ColorController();