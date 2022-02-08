import { IdCompanyService } from "../service/IdCompanyService";
import { Request, Response } from "express";

class IdCompanyController {
  async handle(request: Request, response: Response) {
    const id = request.params.id
  
    const companyService = new IdCompanyService();

    const company = await companyService.execute(id);

    return response.json(company);
  }
}

export { IdCompanyController };
