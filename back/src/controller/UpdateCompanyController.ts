import { UpdateCompanyService } from "../service/UpdateCompanyService";
import { Request, Response } from "express";

class UpdateCompanyController {
    async handle(request: Request, response: Response) {
        const { name, color, image } = request.body;
        const id = request.params.id;
        const UpdatecompanyService = new UpdateCompanyService();

        const company = await UpdatecompanyService.execute(id, { name, color, image });

        return response.json(company);
    }
}

export { UpdateCompanyController }