import { Unit } from "../models/unit";
import { Asset } from "../models/asset";
import { Company } from "../models/company";

interface IUnit {
  name: string;
  company: string;
  asset: [];
}

class CreateUnitService {
  async execute({ name, company, asset }: IUnit) {

    const unitModel = Unit;
    const assetModel = Asset;
    const companyModel = Company
 
    const companyAlreadyExists = await companyModel.findOne({ _id: company });

    if (!companyAlreadyExists) {
      throw new Error("The company not exists!");
    }
    const unity = await unitModel.create({ name, company });

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

export { CreateUnitService };