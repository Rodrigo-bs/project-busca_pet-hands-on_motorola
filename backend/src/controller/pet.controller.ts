import { Request, Response } from 'express';
import { Pet } from '../models/pet.model';
import { Op } from 'sequelize';
import { DATE } from 'sequelize';
import { compareSync } from 'bcrypt';

class PetController {
    public async findAll(req: Request, res: Response): Promise<Response> {
        const pets = await Pet.findAll();

        return res.json(pets);
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const pet = await Pet.findByPk(id);

        if (pet) {
            return res.json(pet);
        } else {
            return res.status(404).json({error: 'Pet não encontrado'});
        }
    }

    public async savePhoto(req: Request, res: Response): Promise<Response> {
        const idPet = req.params.id
        const file: any = req.file;

        const pet = await Pet.update({
            pet_photo: file.filename
        }, {
            where: {
                id_pet: idPet
            } 
        });

        return res.json(file.filename);
    }

    public async register(req: Request, res: Response): Promise<Response> {
        req.body.pet_date_register = new Date();

        const pet = await Pet.findOne({ where: {
            id_user_fk: req.body.id_user_fk,
            pet_is_register_in_db: 0,
        }})

        if (pet) {
            req.body.pet_is_register_in_db = 1;

            await pet?.update(req.body);
            return res.json(pet);
        } else {
            const newPet = await Pet.create(req.body);
            return res.json(newPet);
        }
    }

    public async updatePet(req: Request, res: Response): Promise<Response> {
        const idPet = req.params.id

        if (!idPet) {
            return res.status(401).json({ 'error': 'Pet não encontrado' });
        }

        const pet = await Pet.update(req.body, { where: { id_pet: idPet } }); 
        return res.status(200).json({ 'mensagem': 'Pet atualizado com sucesso' });
    }

    public async deletePet(req: Request, res: Response): Promise<Response> {
        const idPet = req.params.id;

        if (!idPet) {
            return res.status(401).json({ 'error': 'Pet não encontrado' });
        }

        const pet = await Pet.destroy({ where: {
            id_pet: {
                [Op.eq]: idPet
            }
        }});

        return res.status(200).json({ 'mensagem': 'Pet deletado com sucesso' });
    }
}

export default new PetController();