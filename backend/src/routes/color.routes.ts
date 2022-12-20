import { Router } from 'express';
import colorController from '../controller/color.controller';

const routes = Router();

routes.get('/', colorController.findAll);
routes.get('/:id', colorController.findById);
routes.post('/create', colorController.createNewColor);
routes.post('/update/:id', colorController.updateColor);
routes.get('/delete/:id', colorController.deleteColor);

export default routes;