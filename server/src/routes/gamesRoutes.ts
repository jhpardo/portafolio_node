import { Router } from 'express';

import { gamesController } from '../controllers/gamesControllers';

class GamesRoutes {
    router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.games);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;