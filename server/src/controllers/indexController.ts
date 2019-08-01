import { Request, Response } from 'express';

class IndexController {
    constructor() {
        
    }

    public index(req: Request, res: Response) {
        res.json({text: '/index'})
    }
}

export const indexController = new IndexController();