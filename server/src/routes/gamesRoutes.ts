import { Router } from 'express';

import { gamesController } from '../controllers/gamesControllers';

class GamesRoutes {
    router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.games);
        this.router.get('/:id', gamesController.getOneGame);
        this.router.post('/', gamesController.create);
        this.router.delete('/:id', gamesController.delete);
        this.router.put('/:id', gamesController.update);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;