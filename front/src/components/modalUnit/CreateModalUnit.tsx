import "../../style/modal/mondal.scss";
import { useState } from "react";
import { Api } from "../../providers";
import { useParams } from "react-router-dom";

type Ivalues = {
    name: string;
}
function iniitalState() {
    return {
        name: "",
    }
}

export function CreateModalUnit({ onClose = () => { } }) {
    const [values, setValues] = useState<Ivalues>(iniitalState);
    const [emptyValue, setEmptyValue] = useState(false);
    const { id }: any = useParams();

    const { name } = values;
    iniitalState()

    const handleOutsideClick = (event: any) => {

        if (event.target.id === "modal-unit") onClose()
    }

    function onChange(event: any) {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
        setEmptyValue(false)
    }

    function CreateUnit() {
        if (values.name === "") {
            setEmptyValue(true)
            return
        }
        Api.post("/unit", { name: name, company: id, "asset": [] }).then(() => {
            window.location.reload();
        }).catch(() => { alert("Error Create Unit") });
    }
    return (
        <div id="modal-unit" className="modal-container" onClick={handleOutsideClick}>
            <form id="green">

                <div>
                    <div className="form-group">
                  
                        {emptyValue ?
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                required
                                type="text"
                                maxLength="15"
                                name="name"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                onChange={onChange}
                            />
                            <button onClick={CreateUnit} id="emptyValuebutton" type="submit" className="btn btn-primary">Submit</button>
                        </div> :
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                required
                                type="text"
                                maxLength="15"
                                name="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Name"
                                onChange={onChange}
                            />
                            <button onClick={CreateUnit}id="button-Create" type="button" className="btn btn-success">Submit</button>
                        </div>
                    }

                    </div>
                </div>
            </form>
        </div>
    );
}