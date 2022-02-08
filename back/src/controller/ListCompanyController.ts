import { ListCompanyService } from "../service/ListCompanyService";
import { Request, Response } from "express";

class ListCompanyController {
  async handle(request: Request, response: Response) {
 
    const listCompanyService = new ListCompanyService();

    const company = await listCompanyService.execute();

    return response.json(company);
  }
}

export { ListCompanyController };
