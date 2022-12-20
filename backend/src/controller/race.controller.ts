import { Request, Response } from 'express';
import { Race } from '../models/race.model';
import { Op } from 'sequelize';

class RaceController {
    public async findAll(req: Request, res: Response): Promise<Response> {
        const race = await Race.findAll();

        return res.json(race);
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const race = await Race.findByPk(id);

        if (race) {
            return res.json(race);
        } else {
            return res.status(404).json({error: 'race Not Found'});
        }
    }

    public async createNewRace(req: Request, res: Response): Promise<Response> {
        const race = await Race.create(req.body);
        
        return res.json(race);
    }

    public async updateRace(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const race = await Race.update(req.body, { where: { id_race: id } }); 

        return res.json(race);
    }

    public async deleteRace(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const race = await Race.destroy({ where: {
            id_race: {
                [Op.eq]: id
            }
        }});

        return res.json(race);
    }
}

export default new RaceController();