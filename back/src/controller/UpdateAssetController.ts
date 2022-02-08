import { UpdateAssetService } from "../service/UpdateAssetService";
import { Request, Response } from "express";

class UpdateAssetController {
    async handle(request: Request, response: Response) {
        const {unit, name, description, model, owner, status, healthLevel} = request.body;
        const id = request.params.id;

        const updateAssetService = new UpdateAssetService();

        const asset = await updateAssetService.execute(id,{ name, description, model, owner, status, healthLevel, unit });

        return response.json(asset);
    }
}

export { UpdateAssetController }