import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header"
import { useUnit } from "../hooks/UnitHooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemUnit } from "../components/ItemUnit";
import { ItemAssetTable } from "../components/ItemAssetTable";
import { CreateModalUnit } from "../components/modalUnit/CreateModalUnit";
import { DeleteModalUnit } from "../components/modalUnit/DeleteModalUnit";
import { UpdateModalUnit } from "../components/modalUnit/UpdateModalUnit";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';
import add from "../img/add.svg";
import remove from "../img/remove.svg";
import update from "../img/update.svg";
import nounits2 from "../img/nounits2.svg";
import noasset2 from "../img/noasset2.svg";
import nochart from "../img/nochart.svg";
import "../style/Home.scss";
import "../style/components/Header.scss";




export function Home(props: HighchartsReact.Props) {

    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const [isModalVisibleCreate, setIsModalVisibleCreate] = useState(false);
    const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);
    const [isModalVisibleUpdate, setIsModalVisibleUpdate] = useState(false);

    const { id }: any = useParams();
    localStorage.setItem("comunitId", id)
    const { unit, Units } = useUnit();

    useEffect(() => {
        Units(id);
    }, [Units])


    let totalAssetStatus: [object] = [{}]
    let running: [object] = [{}]
    running.shift()

    let paused: [object] = [{}]
    paused.shift()

    let off: [object] = [{}]
    off.shift()

    unit.map(item => item.asset.map(async (items) => totalAssetStatus.push(items)));

    totalAssetStatus.map((itemss: any) => {

        if (itemss.status === "Running") {
            running.push(itemss)
        }
        else if (itemss.status === "Paused") {
            paused.push(itemss)
        }
        else if (itemss.status === "Off") {
            off.push(itemss)
        }

    })

    const totalAssetsUnit = unit.map(item => item.asset.length);
    const totalAssets = totalAssetsUnit.reduce((result, assetLengh) => result += assetLengh, 0);

    const options: Highcharts.Options = {
        chart: {
            backgroundColor: "transparent",
            width: 250,
            height: 270,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: `Assets<br>${totalAssets}<br>`,
            align: 'center',
            verticalAlign: 'middle',
            y: 30,
            style: {
                color: 'black',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '100%'
            }
        },

        colors: ['rgb(23, 194, 34)', '#c2b117', 'rgb(194, 37, 23)'],
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '85%',
            data: [
                ['Running', running.length],
                ['Paused', paused.length],
                ['Off', off.length],

            ]
        }],

    };

    return (
        <main>
            <Header />
            <NavBar totalAsset={totalAssetsUnit} />
            <section className="overview-container">
                <aside>
                    {unit.length > 0
                        ?
                        <div className="overview-unit-graphic">
                            <h2>Unit</h2>
                            <p>this company has {!unit ? "0" : unit.length + " units"} </p>
                            <div className="overview-unit-container">
                                {unit.map((item, index) => (<ItemUnit key={index} {...item} />))}
                            </div>
                        </div>
                        :
                        <div className="overview-unit-graphic">
                            <h2>Unit</h2>
                            <p>this company has {!unit ? "0" : unit.length} units</p>
                            <div className="overview-unit-container">
                                <img src={nounits2} alt="no unit" />
                            </div>
                        </div>
                    }

                    <div className="overview-unit-buttons">

                        <ul>
                            {!isModalVisibleCreate
                                ?
                                <li>
                                    <button type="button" className="overview-buttons " onClick={() => setIsModalVisibleCreate(true)} value="create">
                                        <div className="card">
                                            <h2>Create</h2>
                                            <p>Create Your Unit</p>
                                            <img src={add} alt="Produto" />
                                        </div>
                                    </button>
                                </li>
                                :
                                <CreateModalUnit onClose={() => setIsModalVisibleCreate(false)} />
                            }
                            {!isModalVisibleUpdate
                                ?
                                <li>
                                    <button type="button" className="overview-buttons " onClick={() => setIsModalVisibleUpdate(true)}>
                                        <div className="card" >
                                            <h2>Update</h2>
                                            <p>Update Your Unit</p>
                                            <img src={update} alt="Categoria" />
                                        </div>
                                    </button>
                                </li>
                                :
                                <UpdateModalUnit onClose={() => setIsModalVisibleUpdate(false)} />
                            }
                            {!isModalVisibleDelete
                                ?
                                <li>
                                    <button type="button" className="overview-buttons " onClick={() => setIsModalVisibleDelete(true)}>
                                        <div className="card" >
                                            <h2>Remove</h2>
                                            <p>Remove You Unit</p>
                                            <img src={remove} alt="Categoria" />
                                        </div>
                                    </button>
                                </li>
                                : <DeleteModalUnit onClose={() => setIsModalVisibleDelete(false)} />
                            }
                        </ul>
                    </div>
                </aside>

                <section>

                    <h2>Asset</h2>
                    <p>this company has {totalAssets} assets</p>

                    <div className="overview-asset-container-graphic">
                        {totalAssets !== 0
                            ?
                            <div className="overview-asset-graphic">
                                <HighchartsReact id="a"
                                    highcharts={Highcharts}
                                    options={options}
                                    ref={chartComponentRef}
                                    {...props}
                                />
                            </div>
                            : <div></div>
                        }
                        {totalAssets  ?
                            <div className="overview-status-container">

                                <div className="overview-status" >
                                    <div id="running-circle">
                                    </div>
                                    <p>Running</p>
                                    <strong>{running.length}</strong>
                                </div>
                                <div className="overview-status">
                                    <div id="alerting-circle">
                                    </div>
                                    <p>Paused</p>
                                    <strong>{paused.length}</strong>
                                </div>
                                <div className="overview-status">
                                    <div id="stopped-circle">
                                    </div>
                                    <p>Off</p>
                                    <strong>{off.length}</strong>
                                </div>

                            </div>
                            :
                            <div className="noAsset">
                                <img src={nochart} alt="not" />
                            </div>

                        }
                    </div>

                    <div className="overview-asset-serch-container"></div>
                    {totalAssets !== 0
                        ?
                        <div className="table-asset-container">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Status</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Owner</th>
                                    </tr>
                                </thead>
                                {unit.map(item => item.asset.map((items, index) => (<ItemAssetTable key={index} {...items} />)))}
                            </table>
                        </div>
                        :
                        <div className="container-no-asset">
                            <h2>You don't have assets</h2>
                            <p>create assets to check daily</p>
                            <img src={noasset2} alt="no unit" />
                        </div>
                    }

                </section>

            </section>

        </main >
    )



}


