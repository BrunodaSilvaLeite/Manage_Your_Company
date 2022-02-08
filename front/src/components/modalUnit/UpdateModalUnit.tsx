import "../../style/modal/mondal.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUnit } from "../../hooks/UnitHooks";

import { Api } from "../../providers";
type Ivalues = {
    name: string;
    option: string;
}
function iniitalState() {
    return {
        name: "",
        option: ""
    }
}

export function UpdateModalUnit({ onClose = () => { } }) {

    const [values, setValues] = useState<Ivalues>(iniitalState);
    const [emptyValue, setEmptyValue] = useState(false);
    const { id }: any = useParams();
    const { unit, Units } = useUnit();
    const { unitId, UnitId } = useUnit();
    let { name, option } = values;
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
        setEmptyValue(false)
        if (!values.option) {
            UnitId(value)

        }
    }
    function UpdateUnit() {

        if (values.option === "") {
            setEmptyValue(true)
            return
        }
        const assetsbyunit = unitId[0]?.asset;
        name === "" ? name = unitId[0]?.name : name = name;
        Api.put(`/unit/${option}`, { name: name, asset: assetsbyunit }).then(() => {

        }).catch(() => { alert("Error Updating-Unit") });

    }

    return (
        <div id="modal-unit" className="modal-container" onClick={handleOutsideClick}>
            <form id="blue">
                <div>
                    <div className="form-group">
                        <label>Update Unit</label>
                        {emptyValue ?
                            <select required className="form-control" name="option" onChange={onChange} id="erroSelect"  >
                                <option></option>
                                {unit.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                            </select> :
                            <select className="form-control" name="option" onChange={onChange} >
                                <option></option>
                                {unit.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                            </select>
                        }

                    </div>
                    {emptyValue ?
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                required
                                type="text"
                                name="name"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                onChange={onChange}
                            />
                            <button onClick={UpdateUnit} id="emptyValuebutton" type="submit" className="btn btn-primary">Update</button>
                        </div> :
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                required
                                type="text"
                                name="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Name"
                                onChange={onChange}
                            />
                            <button onClick={UpdateUnit} id="button-Update" type="submit" className="btn btn-primary">Update</button>
                        </div>
                    }

                </div>
            </form>
        </div>
    );
}