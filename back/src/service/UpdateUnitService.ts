import { Unit } from "../models/unit";
import { Asset } from "../models/asset";
import { Company } from "../models/company";

interface IUnit {
    name: string;
    company: string;
    asset: [];

}

class UpdateUnitService {
    async execute(id: string, { name, company, asset }: IUnit) {

        const unitModel = Unit;
        const assetModel = Asset;
        const unity = await unitModel.findByIdAndUpdate({ _id: id }, { name: name, company: company }, { new: true });
        unity.asset = [];
        await assetModel.remove({ unit: unity._id })

        await Promise.all(asset.map(async (assets: []) => {
            const UnitAsset = new assetModel({ ...assets, unit: unity._id });

            UnitAsset.company = unity.company

            await UnitAsset.save();

            unity.asset.push(UnitAsset);
        }));
        await unity.save();
        return unity;
    }
}

export { UpdateUnitService };