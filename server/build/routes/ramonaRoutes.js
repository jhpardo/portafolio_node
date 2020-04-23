"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ramonaControllers_1 = require("../controllers/ramonaControllers");
class RamonaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ramonaControllers_1.ramonaController.ramona);
    }
}
const ramonaRoutes = new RamonaRoutes();
exports.default = ramonaRoutes.router;
