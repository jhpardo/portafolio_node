"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Traer la base de datos
const db_1 = __importDefault(require("../db/db"));
class GamesController {
    games(req, res) {
        db_1.default.query('DESCRIBE games');
        res.json('Games!!!');
        //res.send("Hola desde Games");
    }
}
exports.gamesController = new GamesController();
