import { Request, Response } from 'express';

//Traer la base de datos
import pool from '../db/db'


class GamesController {
    public games (req: Request, res: Response){
        pool.query('DESCRIBE games');
        res.json('Games!!!'); 
        //res.send("Hola desde Games");
    }
}

export const gamesController = new GamesController();