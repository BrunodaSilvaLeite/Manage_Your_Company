import { Link } from "react-router-dom";
import company from "../img/company.png";
export function ItemCompany(item: any) {
 
    const styleCompany = {
        backgroundColor: item.color,
    }
    return (
        
        <Link to={`/overview/${item._id}`} className="link-company">
            <div className="company" style={styleCompany} >
                <div className="image-company" >
                    {!item.image ? <img src={company} />:<img src={item.image} />} 
          
                </div>
                <h1>{item.name}</h1>
                <h1><i className="bi bi-arrow-right-circle"></i></h1>
            </div>
        </Link>
    )

}