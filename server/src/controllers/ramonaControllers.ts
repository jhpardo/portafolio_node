import { Request, Response } from 'express';

class RamonaController {
    public ramona (req: Request, res: Response){
        res.send("Hola desde Ramona");
    }
}

export const ramonaController = new RamonaController();
 //default ramonaController;