"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importacion de metodo router para crear las rutas 
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta inicial / que responde lo que se acaba de iniciar
        this.router.get('/', indexControllers_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
