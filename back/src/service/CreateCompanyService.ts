import { Company } from "../models/company";

interface ICompany {
  name: string;
  user: string;
  color: string;
  image: string;
}
class CreateCompanyService {
  async execute({ name, user, color, image }: ICompany) {
    const companyModel = Company;

    const company = await companyModel.create({ name, user, color, image });

    return company
  }
}

export { CreateCompanyService };