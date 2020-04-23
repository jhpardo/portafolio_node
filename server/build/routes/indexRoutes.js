"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importacion de metodo router para crear las rutas 
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta inicial / que responde lo que se acaba de iniciar
        this.router.get('/', (req, res) => res.send('Hola index'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
