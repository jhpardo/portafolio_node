"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send("Hola desde INDEX");
    }
}
exports.indexController = new IndexController();
