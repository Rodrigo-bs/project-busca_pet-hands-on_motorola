import express from 'express';
import cors from 'cors';

import furRoute from './routes/fur.routes';
import colorRoute from './routes/color.routes';
import raceRoute from './routes/race.routes';
import userRoute from './routes/user.routes';
import petRoute from './routes/pet.routes';
import adRoute from './routes/ad.routes';
import categoryRoute from './routes/category.routes';
import path from 'path';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();

        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use('/images', express.static(__dirname + '/uploads'));
        this.express.use(express.json());
        this.express.use(cors());
    }

    private routes(): void {
        this.express.use('/fur', furRoute);
        this.express.use('/color', colorRoute);
        this.express.use('/category', categoryRoute);
        this.express.use('/race', raceRoute);
        this.express.use('/user', userRoute);
        this.express.use('/pet', petRoute);
        this.express.use('/ad', adRoute);

        this.express.use((req: express.Request, res: express.Response) => {
            res.status(404).json({ status: 404, contents: 'Endereço da requisição não encontrado' });
        });
    }
}

export default new App().express;