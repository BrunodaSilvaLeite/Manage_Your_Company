import { ListAssetService } from "../service/ListAssetService";
import { Request, Response } from "express"

class ListAssetController {
    async handle(request: Request, respons: Response) {
        const id_Unit = request.params.unitId;

        const listAssetService = new ListAssetService();

        const asset = await listAssetService.execute(id_Unit);

        return respons.json(asset);
    }
}

export { ListAssetController }