import { DeletUnitService } from "../service/DeletUnitService";
import { Request, Response } from "express";

class DeletUnitController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deletUnitService = new DeletUnitService();

        const unit = await deletUnitService.execute(id);

        return response.json(unit);
    }
}

export { DeletUnitController }