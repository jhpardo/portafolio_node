import { Router } from 'express';

import { ramonaController } from '../controllers/ramonaControllers';

class RamonaRoutes {
    router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', ramonaController.ramona);
    }
}

const ramonaRoutes = new RamonaRoutes();
export default ramonaRoutes.router;