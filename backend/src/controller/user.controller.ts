import { tokenDecode } from '../types';
import { application, Request, Response } from 'express';
import { User, UserInstance } from '../models/user.model';
import { ModelCtor, Op } from 'sequelize';

import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { rmSync } from 'fs';
import { Pet } from '../models/pet.model';
import { AD } from '../models/ad.model';

class UserController {
    public async register(req: Request, res: Response): Promise<Response> {
        const { user_email } = req.body;

        try {
            if (await User.findOne({ where: { user_email: user_email } })) {
                return res.status(400).send({ 'error': 'resgister-001', 'content': 'Usuário já existente' });
            }

            const userObject = req.body;
            userObject.user_password = bcrypt.hashSync(userObject.user_password, 10);

            const user = await User.create(userObject);
            user.user_password = '';

            const applicationToken: string = process.env.SECRET_TOKEN_KEY as string;
            const token: string = jsonwebtoken.sign({ id: user.id_user }, applicationToken, {
                expiresIn: 86400
            });

            return res.json({ user, token });
        } catch (err) {
            return res.status(400).send({ 'error': 'resgister-002', 'content': 'falha ao cadastrar-se' });
        }
    }

    public async authenticate(req: Request, res: Response): Promise<Response> {
        const { user_email, user_password } = req.body;

        const user = await User.findOne({ where: { user_email: user_email } });

        if (!user) {
            return res.status(400).send({ 'error': 'auth-001', 'content': 'Email não inválido' });
        }

        if (!await bcrypt.compare(user_password, user.user_password)) {
            return res.status(400).send({ 'error': 'auth-002', 'content': 'Senha inválida' });
        }
        
        const applicationToken: string = process.env.SECRET_TOKEN_KEY as string;
        const token: string = jsonwebtoken.sign({ id: user.id_user }, applicationToken, {
            expiresIn: 86400
        });
        
        user.user_password = '';
        return res.json({ user, token });
    }

    public async validateToken(req: Request, res: Response): Promise<Response> {
        const token = req.body.token as string;
        const infos: tokenDecode = jsonwebtoken.decode(token) as tokenDecode;

        const todayDate: Date = new Date();
        const tokenExpirationToken: Date = new Date(infos.exp * 1000);

        if (tokenExpirationToken < todayDate) {
            return res.status(400).send({ 'error': 'valid-001', 'content': 'Token expirou' });
        }

        const user = await User.findByPk(infos.id);

        if (!user) {
            return res.status(400).send({ 'error': 'valid-002', 'content': 'Token Inválido' });
        }

        return res.send(true);
    }

    public async findMyPets(req: Request, res: Response): Promise<Response> {
        const id: string = req.params.id as string;

        if (!id) {
            return res.status(404).send({ 'error': 'get-001', 'content': 'Informações Faltando' });
        }

        const pets = await Pet.findAll({ where: { 
            id_user_fk: id
        }});

        if (!pets) {
            return res.status(404).send({ 'error': 'get-002', 'content': 'Nenhum pet cadastrado' });
        }

        return res.json(pets);
    }
    

    public async findMyAds(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;

        if (!id) {
            return res.status(404).send({ 'error': 'get-001', 'content': 'Informações Faltando' });
        }

        const ads = await AD.findAll({ where: { 
            id_user_fk: id
        }});

        if (!ads) {
           return res.status(404).send({ 'error': 'get-002', 'content': 'Nenhum pet cadastrado' });
        }

        return res.json(ads);
    }

    public async findMyPedingPet(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;

        if (!id) {
            return res.status(404).send({ 'error': 'get-001', 'content': 'Informações Faltando' });
        }

        const pedingPet = await Pet.findOne({ where: {
            id_user_fk: id,
            pet_is_register_in_db: 0
        }});

        if (!pedingPet) {
            return res.status(404).send({ 'error': 'get-002', 'content': 'Nenhum pet pendente' });
         }

         return res.json(pedingPet);
    }

    public async findMyPedingAd(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;

        if (!id) {
            return res.status(404).send({ 'error': 'get-001', 'content': 'Informações Faltando' });
        }

        const pedingAd = await AD.findOne({ where: {
            id_user_fk: id,
            ad_is_register_in_db: 0
        }});

        if (!pedingAd) {
            return res.status(404).send({ 'error': 'get-002', 'content': 'Nenhum pet pendente' });
         }

         return res.json(pedingAd);
    }

    public async findUserByID(req: Request, res: Response): Promise<Response> {
        const id: string = req.params.id as string;

        if (!id) {
            return res.status(404).send({ 'error': 'get-001', 'content': 'Informações Faltando' });
        }

        const user: any = await User.findAll({ attributes: [
            'id_user',
            'user_name',
            'user_email',
            'user_cpf',
            'user_phone',
            'user_photo'
        ], where: { 
            id_user: id
        }});

        if (!user) {
            return res.status(404).send({ 'error': 'get-002', 'content': 'Nenhum usuario cadastrado' });
        }

        user.user_password = '';

        return res.json(user);
    }
}

export default new UserController();