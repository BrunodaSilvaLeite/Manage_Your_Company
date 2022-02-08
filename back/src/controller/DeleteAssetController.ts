import { Request, Response } from "express";
import { DeleteAssetService } from "../service/DeleteAssetService";

class DeleteAssetController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteAssetService = new DeleteAssetService();

        const asset = await deleteAssetService.execute(id);

        return response.json(asset);
    }
}

export { DeleteAssetController }