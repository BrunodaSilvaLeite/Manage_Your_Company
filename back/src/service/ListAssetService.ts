import { Asset } from "../models/asset";

class ListAssetService {
    async execute(id_Unit: string) {
        const assetModel = Asset;

        const asset = await assetModel.find({ "unit": id_Unit });

        return asset;
    }
}

export { ListAssetService };