import { UpdateUnitService } from "../service/UpdateUnitService";
import { Request, Response } from "express";

class UpdateUnitController {
    async handle(request: Request, response: Response) {
        const { name, company, asset } = request.body;
       
        const id = request.params.id ;
        const updateUnitService = new UpdateUnitService();

        const unity = await updateUnitService.execute(id,{  name, company, asset });

        return response.json(unity);
    }
}

export { UpdateUnitController }