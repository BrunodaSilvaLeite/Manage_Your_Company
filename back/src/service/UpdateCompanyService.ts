import { Unit } from "../models/unit";
import { Asset } from "../models/asset";
import { Company } from "../models/company";

interface ICompany {
    name: string;
    color: string;
    image: string;

}

class UpdateCompanyService {
    async execute(id: string, { name, color, image }: ICompany) {

        const companyModel = Company

        const companyAlreadyExists = await companyModel.findOne({ _id: id});

        if (!companyAlreadyExists) {
            throw new Error("The company not exists!");
        }
      
        const company = await companyModel.findByIdAndUpdate(id, { name: name, color: color, image: image }, { new: true });
        return company;
    }
}

export { UpdateCompanyService };