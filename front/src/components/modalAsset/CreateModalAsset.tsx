import "../../style/modal/mondal.scss";
import { useState } from "react";
import { Api } from "../../providers";


type Ivalues = {
    name: string;
    image: string,
    description: string
    model: string,
    owner: string,
    status: string,
    healthLevel: number
}
function iniitalState() {
    return {
        name: "",
        image: "",
        description: "",
        model: "",
        owner: "",
        status: "Running",
        healthLevel: 0
    }
}

export function CreateModalAsset({ onClose = () => { }, unitId }: any) {
    const [values, setValues] = useState<Ivalues>(iniitalState);
    const [emptyValue, setEmptyValue] = useState(false);
    const idUnit = unitId[0]?._id;
    const nameUnit = unitId[0]?.name;
    const assetsByUnit = unitId[0]?.asset;
    const { name, image, description, model, owner, status, healthLevel } = values;
    iniitalState()

    const handleOutsideClick = (event: any) => {

        if (event.target.id === "modal-asset") onClose()
    }

    function onChange(event: any) {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
        setEmptyValue(false)
    }
    const newAsset = {
        "name": name,
        "image": image,
        "description": description,
        "model": model,
        "owner": owner,
        "status": status,
        "healthLevel": healthLevel
    }

    const arrCreateAsset: any = []
    assetsByUnit.map((item: any) => arrCreateAsset.push(item))
    arrCreateAsset.unshift(newAsset)

    function CreateUnit() {
        if (name === "") {
            setEmptyValue(true)
            return
        }
        Api.put(`/unit/${idUnit}`, { name: nameUnit, asset: arrCreateAsset }).then(() => {
            window.location.reload();
        }).catch(() => { setEmptyValue(true) });
    }

    return (
        <div id="modal-asset" className="modal-container" onClick={handleOutsideClick}>
            <form id="green" className="modal-create">
                {emptyValue ?
                    <div>

                        <div className="form-group" id="errorInput">
                            <label>Name</label>
                            <input
                                type="text"
                                maxLength="20"
                                name="name"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                onChange={onChange}
                                required
                            />

                        </div>
                        <div className="form-group">
                            <label>image</label>
                            <input
                                type="text"
                                name="image"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>description</label>
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>model</label>
                            <input
                                type="text"
                                name="model"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>owner</label>
                            <input
                                type="text"
                                name="owner"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Choose status to update</label>
                            <select required className="form-control" name="status" onChange={onChange} >
                                <option id="Running" value="Running">Running</option>
                                <option id="Paused" value="Paused">Paused</option>
                                <option id="Off" value="Off">Off</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>healthLevel</label>
                            <input
                                type="number"
                                name="healthLevel"
                                className="form-control"
                                id="erro"
                                placeholder="Required Field"
                                min="0"
                                max="100"
                                onChange={onChange}
                            />

                        </div>
                
                            <button id="emptyValuebutton" onClick={CreateUnit} type="button" className="btn btn-danger">Submit</button>
 
                        </div>
                         :
                        <div>

                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    name="name"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Name"
                                    onChange={onChange}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <label>image</label>
                                <input
                                    type="text"
                                    name="image"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="image"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>description</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="description"
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>model</label>
                                <input
                                    type="text"
                                    name="model"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="model"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>owner</label>
                                <input
                                    type="text"
                                    name="owner"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="owner"
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Choose status to update</label>
                                <select required className="form-control" name="status" onChange={onChange} >
                                    <option id="Running" value="Running">Running</option>
                                    <option id="Paused" value="Paused">Paused</option>
                                    <option id="Off" value="Off">Off</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>healthLevel</label>
                                <input
                                    type="number"
                                    name="healthLevel"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="healthLevel"
                                    min="0"
                                    max="100"
                                    onChange={onChange}
                                />

                            </div>

                            <button onClick={CreateUnit} id="button-Create" type="button" className="btn btn-success">Submit </button>

                        </div>
                }
                

             </form>
        </div>
    );
}