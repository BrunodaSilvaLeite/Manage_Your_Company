import { DeleteCompanyService } from "../service/DeleteCompanyService";
import { Request, Response } from "express";

class DeleteCompanyController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deletCompanyService = new DeleteCompanyService();

        const company = await deletCompanyService.execute(id);

        return response.json(company);
    }
}

export { DeleteCompanyController }