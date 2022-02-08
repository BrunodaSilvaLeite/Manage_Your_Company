import "../../style/modal/mondal.scss";
import { useEffect, useState } from "react";
import { useCompany } from "../../hooks/CompanyHooks";
import { Api } from "../../providers";
type Ivalues = {
    name: string;
    color: string;
    image: string;
    option: any;
}
function iniitalState() {
    return {
        name: "",
        color: "",
        image: "",
        option: "",
    }
}

export function UpdateModalCompany({ onClose = () => { } }) {

    const [values, setValues] = useState<Ivalues>(iniitalState);
    const [emptyValue, setEmptyValue] = useState(false);
    const { companyId, CompanysId } = useCompany();
    let { name, color, image, option } = values;
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

    function UpdateCompany() {
        CompanysId(option)

        if (values.option === "") {
            setEmptyValue(true)
            return
        }
        image === "" ? image = companyId[0]?.image : image = image;
        name === "" ? name = companyId[0]?.name : name = name;
        color === "" ? color = companyId[0]?.color : color = color;

        Api.put(`/company/${option}`, { name: name, color: color, image: image, }).then(() => {
            window.location.reload();
        }).catch(() => { alert("Error Updating Company") });

    }

    return (
        <div id="modal-company" className="modal-container" onClick={handleOutsideClick}>
            <form id="blue">
                <div>
                    <div className="form-group">
                        <label>Choose company to update</label>
                        {emptyValue ?
                            <select required className="form-control" name="option" onChange={onChange} id="erroSelect"  >
                                <option></option>
                                {company.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                            </select> :
                            <select  className="form-control" name="option" onChange={onChange} >
                                  <option></option>
                                {company.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                            </select>
                        }

                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            maxLength="20"
                            type="text"
                            name="name"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Name"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Color</label>
                        <input
                            type="color"
                            name="color"
                            className="form-control"
                            id="exampleFormControlInput1"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Imagem</label>
                        <input
                            type="text"
                            name="image"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Link da Imagem"
                            onChange={onChange}
                        />
                    </div>

                    <button onClick={UpdateCompany} id="button-Update" type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
}