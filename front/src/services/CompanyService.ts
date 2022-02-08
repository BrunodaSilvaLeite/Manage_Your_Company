import { Api } from "../providers/index";
import { ICompany } from "../interfaces";

const getcompany = () => Api.get<ICompany[]>(`/ListCompany`)
const getcompanyId = (id: Pick<ICompany , "_id">) => Api.get<ICompany[]>(`/company/${id}`)

export const CompanyService = {
    getcompany,
    getcompanyId
}