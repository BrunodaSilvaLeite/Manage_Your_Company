import { useCompany } from "../hooks/CompanyHooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import company from "../img/company.png";
import "../style/components/Header.scss";

export function Header() {
    const [isComponentUser, setIsComponentUser] = useState(false);
    const id = localStorage.getItem("comunitId"); 
    const { companyId, CompanysId } = useCompany();
    useEffect(() => {
        CompanysId(id);
    }, [CompanysId])

    const styleCompany = {
        backgroundColor: companyId[0]?.color,
    }

    return (
        <header className="header" style={styleCompany}>
            <div className="container-image-text">
                <div className="image-container">
                    {companyId[0]?.image ? <Link to={`/overview/${id}`}><img id="logo" src={companyId[0]?.image} alt="logo" /></Link> : <Link to={`/overview/${id}`}><img id="logo" src={company} alt="logo" /></Link>}
                </div>
                <div className="text-container">
                    <Link to={`/overview/${id}`}>  <p>{companyId[0]?.name}</p></Link>
                </div>
            </div>
        </header>
    )
}

