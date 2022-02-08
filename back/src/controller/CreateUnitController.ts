import { CreateUnitService } from "../service/CreateUnitService";
import { Request, Response } from "express";

class CreateUnitController {
    async handle(request: Request, response: Response) {
        const { name, company, asset } = request.body;

        const createUnitService = new CreateUnitService();

        const unity = await createUnitService.execute({ name, company, asset });
        
        return response.json(unity);
    }
}

export { CreateUnitController };