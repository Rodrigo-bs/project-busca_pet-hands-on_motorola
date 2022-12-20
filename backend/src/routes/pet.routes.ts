import { Router } from 'express';
import multer from 'multer';

import petController from '../controller/pet.controller';
import multerConfig from '../config/multer';

import authMiddleware from '../middlewares/auth';

const routes = Router();


routes.get('/', petController.findAll);
routes.get('/:id', petController.findById);


routes.use(authMiddleware);

routes.post('/register', petController.register);
routes.post('/save-photo/:id', multer(multerConfig).single('file'), petController.savePhoto);
routes.post('/update/:id', petController.updatePet);
routes.get('/delete/:id', petController.deletePet);

export default routes;