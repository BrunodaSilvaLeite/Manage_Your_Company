import "../../style/modal/mondal.scss";
import { useState } from "react";
import { Api } from "../../providers";

type Ivalues = {
    name: string;
    color: string;
    image: string;

}
function iniitalState() {
    return {
        name: "",
        color: "",
        image: "",

    }
}
export function CreateModalCompany({ onClose = () => { } }) {
    const [values, setValues] = useState<Ivalues>(iniitalState);
    const [emptyValue, setEmptyValue] = useState(false);
    const { name, color, image, } = values;
    iniitalState()
    const userId = localStorage.getItem("User_id")
    const handleOutsideClick = (event: any) => {

        if (event.target.id === "modal-company") onClose()
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    function CreateCompany() {
        if (values.name === "") {
            setEmptyValue(true)
            return
        }
        Api.post("/company", { name: name, color: color, image: image, user: userId }).then(() => {
            window.location.reload();
        }).catch(() => { alert("Error Create Company") });
    }
    return (
        <div id="modal-company" className="modal-container" onClick={handleOutsideClick}>
            <form id="green">

                <div>

                    <div className="form-group">
                        <label>Name</label>
                        {emptyValue && values.name === "" ?
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                onChange={onChange}
                                maxLength="20"
                            />
                            :
                            <input

                                type="text"
                                name="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Name"
                                onChange={onChange}
                                maxLength="20"

                            />}

                    </div>


                    <div className="form-group">
                        <label>Color (optional)</label>
                        <input type="color"
                            name="color"
                            className="form-control"
                            id="exampleFormControlInput1"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Imagem (optional)</label>
                        <p>if there is no image , we generate automatically</p>
                        <input
                            type="text"
                            name="image"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Link da Imagem"
                            onChange={onChange}
                        />
                    </div>
                    <button onClick={CreateCompany} id="button-Create" type="button" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    );
}