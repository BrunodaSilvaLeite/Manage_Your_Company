import "../../style/modal/mondal.scss";
import { useEffect, useState } from "react";
import { useCompany } from "../../hooks/CompanyHooks";
import { Api } from "../../providers";

type Ivalues = {
    option: any;
}
function iniitalState() {
    return {
        option: "",
    }
}

export function DeleteModalCompany({ onClose = () => { } }) {
    const [values, setValues] = useState<Ivalues>(iniitalState);
    const [emptyValue, setEmptyValue] = useState(false);
    const { option } = values;
    iniitalState()

    const handleOutsideClick = (event: any): void => {
        if (event.target.id === "modal-company") onClose()
    }

    const { company, Companys } = useCompany();
    useEffect(() => {
        Companys();
    }, [Companys])

    function onChange(event: any) {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    function DeleteCompany() {
        if (values.option === "") {
            setEmptyValue(true)
            return
        }
        Api.delete(`/company/${option}`).then(() => {
            window.location.reload();
        }).catch(() => { alert("Error Delete Company") });
    }
    return (
        <div id="modal-company" className="modal-container" onClick={handleOutsideClick}>
            <form id="red">
                <div className="form-group">
                    <h2>Delete company</h2>
                    {emptyValue ?
                            <select required className="form-control" name="option" onChange={onChange} id="erroSelect"  >
                                <option></option>
                                {company.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                            </select> :
                            <select className="form-control" name="option" onChange={onChange} >
                                  <option></option>
                                {company.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                            </select>
                        }
                    <button onClick={DeleteCompany} id="button-remove" type="submit" className="btn btn-danger">Remove</button>
                </div>
            </form>
        </div>
    );
}