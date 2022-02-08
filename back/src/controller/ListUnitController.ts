import { ListUnitService } from "../service/ListUnitService";
import { Request, Response } from "express";

class ListUnitController {
  async handle(request: Request, response: Response) {
    const id_Company = request.params.companyId
 
    const listUnitService = new ListUnitService();

    const units = await listUnitService.execute(id_Company);

    return response.json(units);
  }
}

export { ListUnitController };
