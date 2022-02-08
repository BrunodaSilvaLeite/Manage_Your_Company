import { Asset } from "../models/asset";

interface IAsset {
    name: string,
    description: string,
    model: string,
    owner: string,
    status: string,
    healthLevel: number,
    unit: string,
}
class UpdateAssetService {
    async execute(id:string,{ name, description, model, owner, status, healthLevel, unit }: IAsset) {
        const assetModel = Asset;
        const asset = await assetModel.findByIdAndUpdate(id,{ name, description, model, owner, status, healthLevel, unit });
        return asset;
    }
}

export { UpdateAssetService };