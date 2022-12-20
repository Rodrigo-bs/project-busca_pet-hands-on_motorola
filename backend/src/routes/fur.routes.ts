import { Router } from 'express';
import furController from '../controller/fur.controller';

const routes = Router();

routes.get('/', furController.findAll);
routes.get('/:id', furController.findById);
routes.post('/create', furController.createNewFur);
routes.post('/update/:id', furController.updateFur);
routes.get('/delete/:id', furController.deleteFur);

export default routes;