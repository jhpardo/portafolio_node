import { Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response){
        res.send("Hola desde INDEX");
    }
}

export const indexController = new IndexController();

