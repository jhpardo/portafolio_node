"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Traer la base de datos
const db_1 = __importDefault(require("../db/db"));
class GamesController {
    games(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield db_1.default.query('SELECT * FROM games', function (err, rows) {
                res.send(rows);
            });
            res.json(games);
            //res.send("Hola desde Games");
        });
    }
    getOneGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructuring: obtener una parte de un objeto, en este caso el ID
            const { id } = req.params;
            const games = yield db_1.default.query('SELECT * FROM games WHERE id = ?', [id], function (err, result) {
                if (err)
                    throw err;
                //Codigo sacado de https://github.com/danikyo/angular-node-mysql/blob/master/server/src/controllers/gamesController.ts
                if (result.length > 0) {
                    res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "Game doesn't exist" });
                }
            });
        });
    }
    //Metodo asincrono que genera la consulta y puede seguir con el codigo 
    //se  anade el promise void especificando que metodo no retorna algo
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default.query('INSERT INTO games set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Juego creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: 'Eliminando juego' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Actualizando juego  ' + req.params.id });
        });
    }
}
exports.gamesController = new GamesController();
