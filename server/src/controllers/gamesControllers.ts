import { Request, Response } from 'express';

//Traer la base de datos
import pool from '../db/db'

class GamesController {
    public async games (req: Request, res: Response){
        const games = await pool.query('SELECT * FROM games', 
        function (err, rows) {
            res.send (rows);
        });
        res.json(games); 
        //res.send("Hola desde Games");
    }

    public async getOneGame (req: Request, res: Response){
        //Destructuring: obtener una parte de un objeto, en este caso el ID
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id],
         function(err, result) {
            if (err) throw err;
            
            //Codigo sacado de https://github.com/danikyo/angular-node-mysql/blob/master/server/src/controllers/gamesController.ts
            if (result.length > 0) {
                res.json(result[0]);
            } 
            else {
                res.status(404).json({text: "Game doesn't exist"});
            }
        });
        
    }

    //Metodo asincrono que genera la consulta y puede seguir con el codigo 
    //se  anade el promise void especificando que metodo no retorna algo
    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Juego creado'});
    }

    public async delete(req: Request, res: Response): Promise <void>{
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'Eliminando juego'});
    }

    public async update(req: Request, res: Response): Promise <void>{
        const { id } = req.params;
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Actualizando juego  ' + req.params.id});
    }

}

export const gamesController = new GamesController();