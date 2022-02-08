import { CreateCompanyService } from "../service/CreateCompanyService";
import { Request, Response } from "express";

class CreateCompanyController {
  async handle(request: Request, response: Response) {
    const { name, user, color, image } = request.body;

    const createCompanyService = new CreateCompanyService();

    const company = await createCompanyService.execute({ name, user, color, image });

    return response.json(company);
  }
}

export { CreateCompanyController };
