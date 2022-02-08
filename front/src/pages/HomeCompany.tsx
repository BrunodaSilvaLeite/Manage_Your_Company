import add from "../img/add.svg";
import remove from "../img/remove.svg";
import update from "../img/update.svg";
import { useEffect, useState } from "react";
import { useCompany } from "../hooks/CompanyHooks";
import { ItemCompany } from "../components/ItemCompany";
import { CreateModalCompany } from "../components/mondalCompany/CreateModalCompany";
import { DeleteModalCompany } from "../components/mondalCompany/DeleteModalCompany";
import { UpdateModalCompany } from "../components/mondalCompany/UpdateModalCompany";
import "../style/Company.scss";


export function HomeCompany() {
    const [isModalVisibleCreate, setIsModalVisibleCreate] = useState(false);
    const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);
    const [isModalVisibleUpdate, setIsModalVisibleUpdate] = useState(false);

    const { company, Companys } = useCompany();
    useEffect(() => {
        Companys();
    }, [Companys])
    
    
    return (
        <main >
            <div className="company-container">
                <aside>
                    <strong>Your Companies </strong>
                    <strong> {company.length} </strong>
                    <p>manage your companies</p>

                    <ul>
                        {!isModalVisibleCreate
                            ?
                            <li>
                                <button type="button" onClick={() => setIsModalVisibleCreate(true)} value="create">
                                    <div className="card" id="green">
                                        <h2>Create</h2>
                                        <p>Create Your Company</p>
                                        <img src={add} alt="Produto" />
                                    </div>
                                </button>
                            </li>
                            :
                            <CreateModalCompany onClose={() => setIsModalVisibleCreate(false)} />
                        }
                        {!isModalVisibleUpdate
                            ?
                            <li>
                                <button type="button" onClick={() => setIsModalVisibleUpdate(true)}>
                                    <div className="card" id="blue">
                                        <h2>Update</h2>
                                        <p>Update Your Company</p>
                                        <img src={update} alt="Categoria" />
                                    </div>
                                </button>
                            </li>
                            :
                            <UpdateModalCompany  onClose={ () => setIsModalVisibleUpdate(false) }  />
                        }
                        {!isModalVisibleDelete
                            ?
                            <li>
                                <button type="button" onClick={() => setIsModalVisibleDelete(true)}>
                                    <div className="card" id="red">
                                        <h2>Remove</h2>
                                        <p>Remove You Company</p>
                                        <img src={remove} alt="Categoria" />
                                    </div>
                                </button>
                            </li>
                            : <DeleteModalCompany onClose={() => setIsModalVisibleDelete(false)} />
                        }
                    </ul>
                </aside>
                <section >
                    {company.map((item: any, index: any) => (<ItemCompany key={index} {...item} />))}
                </section>
            </div>
        </main>
    )
}