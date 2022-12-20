import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import adController from '../controller/ad.controller';
import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.get('/', adController.findAll);
routes.get('/:id', adController.findById);

routes.use(authMiddleware);

routes.post('/create', adController.createNewAd);
routes.post('/save-photo/:id', multer(multerConfig).single('file'), adController.savePhoto);
routes.post('/update/:id', adController.updateAd);
routes.get('/delete/:id', adController.deleteAd);

export default routes;