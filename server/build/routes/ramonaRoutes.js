"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RamonaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Ruta de ramona'));
    }
}
const ramonaRoutes = new RamonaRoutes();
exports.default = ramonaRoutes.router;
