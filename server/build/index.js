"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modulo para crear el servidor 
const express_1 = __importDefault(require("express"));
//Modulo para verificar las rutas que esta pidiendo el cliente GET PUT Delete POST
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Importar rutas que se usaran en nuestra API
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const ramonaRoutes_1 = __importDefault(require("./routes/ramonaRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        //Configuracion de escucha de puerto, definido o dado por servidor
        this.app.set('puerto', process.env.PORT || 4444);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        //Permitira transportar datos en formato JSON que son enviados desde ANGULAR y demas
        this.app.use(express_1.default.json());
        //Se usa enviar desde formularios HTML 
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        // Importando la ruta que voy a utilizar
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/ramona', ramonaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('puerto'), () => {
            console.log('Servidor escuchando en puerto ', this.app.get('puerto'));
        });
    }
}
const server = new Server();
server.start();
