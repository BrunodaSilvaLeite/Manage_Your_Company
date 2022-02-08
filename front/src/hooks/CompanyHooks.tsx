import { useCallback, useState } from "react"
import { CompanyService } from "../services/CompanyService";
import { ICompany } from "../interfaces"

export const useCompany = () => {
    const [company, setCompany] = useState<ICompany[]>([])
    const [companyId, setCompanyId] = useState<ICompany[]>([])
   
    const Companys = useCallback(async () => {
        const { data, status } = await CompanyService.getcompany();

        if (status !== 200) throw new Error();

        setCompany(data)
    }, [])
    const CompanysId = useCallback(async (id) => {
        const { data, status } = await CompanyService.getcompanyId(id);
        
        if (status !== 200) throw new Error();

        setCompanyId(data)
    }, [setCompanyId])

    return {
        Companys,
        company,
        CompanysId,
        companyId
    }
}