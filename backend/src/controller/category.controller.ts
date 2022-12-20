import { Request, Response } from "express";
import { Category } from '../models/category.model';

class CategoryController {
    public async findAll(req: Request, res: Response): Promise<Response>{
        const category = await Category.findAll();

        return res.json(category);
    }
    
    public async findById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const category = await Category.findByPk(id);

        if (category) {
            return res.json(category);
        } else {
            return res.status(404).json({error: 'Ad Not Found'});
        }
    }
}

export default new CategoryController();