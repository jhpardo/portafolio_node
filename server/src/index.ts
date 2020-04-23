//Modulo para crear el servidor 
import express, {Application} from 'express';
//Modulo para verificar las rutas que esta pidiendo el cliente GET PUT Delete POST
import morgan from 'morgan';

import cors from 'cors';


//Importar rutas que se usaran en nuestra API
import indexRoutes from './routes/indexRoutes';
import ramonaRoutes from './routes/ramonaRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server{

    public app : Application;


    constructor (){
        this.app = express();
        this.config();
        this.routes();
    }

    config() : void{
        //Configuracion de escucha de puerto, definido o dado por servidor
        this.app.set('puerto', process.env.PORT || 4444);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        //Permitira transportar datos en formato JSON que son enviados desde ANGULAR y demas
        this.app.use(express.json());
        //Se usa enviar desde formularios HTML 
        this.app.use(express.urlencoded({extended: false}));
    }

    routes() :  void{
       // Importando la ruta que voy a utilizar
        this.app.use(indexRoutes);
        this.app.use('/api/ramona',ramonaRoutes);
        this.app.use('/api/games',gamesRoutes);
    }

    start() : void{
        this.app.listen(this.app.get('puerto'),  () =>{
            console.log('Servidor escuchando en puerto ', this.app.get('puerto'));
        });
    } 
}

const server = new Server();
server.start();