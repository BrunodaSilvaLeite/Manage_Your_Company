import { Company } from "../models/company";

class ListCompanyService {
  async execute() {
    const companyModel = Company;

    const company = await companyModel.find();

    return company;
  }
}

export { ListCompanyService };