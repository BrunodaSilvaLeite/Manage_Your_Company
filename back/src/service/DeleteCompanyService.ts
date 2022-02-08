import { Company } from "../models/company";
import { Unit } from "../models/unit";
import { Asset } from "../models/asset";

class DeleteCompanyService {
    async execute(id: string) {
        const companyModel = Company;
        const unitModel = Unit;
        const assetModel = Asset;
        const companyAlreadyExists = await companyModel.findOne({ id });

        if (!companyAlreadyExists) {
            throw new Error("The Unit already exists!");
        }

        await companyModel.findOneAndDelete({ _id: id });
        await unitModel.remove({ company: id });
        await assetModel.remove({ company: id });
       
        return
    }
}

export { DeleteCompanyService };