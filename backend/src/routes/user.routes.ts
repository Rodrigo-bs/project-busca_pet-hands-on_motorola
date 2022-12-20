import { Router } from 'express';
import userController from '../controller/user.controller';
import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.post('/register', userController.register);
routes.post('/authenticate', userController.authenticate);
routes.post('/valid-token', userController.validateToken);

routes.use(authMiddleware);

routes.get('/my-ads/:id', userController.findMyAds);
routes.get('/my-pets/:id', userController.findMyPets);
routes.get('/peding-pet/:id', userController.findMyPedingPet);
routes.get('/peding-ad/:id', userController.findMyPedingAd);
routes.get('/:id', userController.findUserByID);

export default routes;