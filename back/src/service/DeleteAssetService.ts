import { Asset } from "../models/asset";

class DeleteAssetService {
    async execute(id: String) {
        const assetModel = Asset;

        await assetModel.remove({ _id: id });

        return
    }
}

export { DeleteAssetService };