import "../../style/modal/mondal.scss";
import { useState, useEffect } from "react";
import { useUnit } from "../../hooks/UnitHooks";
import { Api } from "../../providers";
import { useParams } from "react-router-dom";

type Ivalues = {
    option: any;
}
function iniitalState() {
    return {
        option: "",
    }
}

export function DeleteModalUnit({ onClose = () => { } }) {
    const [values, setValues] = useState<Ivalues>(iniitalState);
    const [emptyValue, setEmptyValue] = useState(false);
    const { id }: any = useParams();
    const { option } = values;

    const { unit, Units } = useUnit();

    iniitalState()

    useEffect(() => {
        Units(id);
    }, [Units])

    const handleOutsideClick = (event: any): void => {
        if (event.target.id === "modal-unit") onClose()
    }

    function onChange(event: any) {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }
    
    function DeleteUnit() {
        if (values.option === "") {
            setEmptyValue(true)
            return
        }
        Api.delete(`/unit/${option}`).then(() => {
            window.location.reload();
        }).catch(() => { alert("Error Delete Unit") });
    }
    return (
        <div  id="modal-unit" className="modal-container" onClick={handleOutsideClick}>
            <form id="red">
                <div className="form-group">
                    <h2>Delete company</h2>
                    {emptyValue ?
                            <select required className="form-control" name="option" onChange={onChange} id="erroSelect"  >
                                <option></option>
                                {unit.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                            </select> :
                            <select  className="form-control" name="option" onChange={onChange} >
                                  <option></option>
                                {unit.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                            </select>
                        }
                    <button onClick={DeleteUnit} id="button-remove" type="submit" className="btn btn-danger">Remove</button>
                </div>
            </form>
        </div>
    );
}