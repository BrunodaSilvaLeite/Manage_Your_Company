import { IdUnitService } from "../service/IdUnitService";
import { Request, Response } from "express";

class IdUnitController {
  async handle(request: Request, response: Response) {
    const id = request.params.id
  
    const idUnitService = new IdUnitService();

    const unit = await idUnitService.execute(id);

    return response.json(unit);
  }
}

export { IdUnitController };
