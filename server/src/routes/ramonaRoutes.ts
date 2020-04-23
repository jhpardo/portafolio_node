import { Router } from 'express';

class RamonaRoutes {
    router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send ('Ruta de ramona'));
    }
}

const ramonaRoutes = new RamonaRoutes();
export default ramonaRoutes.router;