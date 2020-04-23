// Importacion de metodo router para crear las rutas 
import { Router } from 'express';

class IndexRoutes {
    router: Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        //Ruta inicial / que responde lo que se acaba de iniciar
        this.router.get('/', (req, res) => res.send('Hola index'));
    }

}

const indexRoutes = new IndexRoutes ();
export default indexRoutes.router;