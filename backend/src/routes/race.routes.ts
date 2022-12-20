import { Router } from 'express';
import raceController from '../controller/race.controller';

const routes = Router();

routes.get('/', raceController.findAll);
routes.get('/:id', raceController.findById);
routes.post('/create', raceController.createNewRace);
routes.post('/update/:id', raceController.updateRace);
routes.get('/delete/:id', raceController.deleteRace);

export default routes;