import { Company } from "../models/company";

class IdCompanyService {
  async execute(id: string) {
    const companyModel = Company;

    const company = await companyModel.find({ _id: id});

    return company;
  }
}

export { IdCompanyService };