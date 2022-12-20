import { Router } from 'express';
import categoryController from '../controller/category.controller';

const routes = Router();

routes.get('/', categoryController.findAll);
routes.get('/:id', categoryController.findById);

export default routes;