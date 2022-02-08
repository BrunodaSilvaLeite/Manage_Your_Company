import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Asset } from "../components/Asset";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUnit } from "../hooks/UnitHooks";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';
import "../style/AssetPage.scss";
import { CreateModalAsset } from "../components/modalAsset/CreateModalAsset";
import { DeleteModalAsset } from "../components/modalAsset/DeleteModalAsset";
import noasset3 from "../img/noasset3.svg";
import createAsset from "../img/createAsset.svg";
import nochart from "../img/nochart.svg";
import chart2 from "../img/chart2.svg";
type Ivalues = {
    option: any;
}

export function AssetPage(props: HighchartsReact.Props) {
    function iniitalState() {
        return {
            option: "",
        }
    }
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    const [values, setValues] = useState<Ivalues>(iniitalState);
    const { id }: any = useParams();
    const { unit, Units } = useUnit();
    const { unitId, UnitId } = useUnit();

    useEffect(() => {
        Units(id);
    }, [Units])

    const totalAssets = unitId[0]?.asset.length;
    const totalAssetsInAllUnits = unit.map(item => item.asset.length)
    const assetsbyunit = unitId[0]?.asset;

    let totalAssetStatus: [object] = [{}]
    let running: [object] = [{}]
    running.shift()

    let paused: [object] = [{}]
    paused.shift()

    let off: [object] = [{}]
    off.shift()

    unitId[0]?.asset.map(item => totalAssetStatus.push(item));

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

    let totalAssetLife: [object] = [{}]

    let lowlife: [object] = [{}]
    lowlife.shift()

    let averageLife: [object] = [{}]
    averageLife.shift()

    let alive: [object] = [{}]
    alive.shift()
    unitId[0]?.asset.map(item => totalAssetLife.push(item));

    totalAssetLife.map((itemss: any) => {

        if (itemss.healthLevel === 0) {
            lowlife.push(itemss)
        }
        else if (itemss.healthLevel >= 1 && itemss.healthLevel <= 50) {
            averageLife.push(itemss)
        }
        else if (itemss.healthLevel > 50 && itemss.healthLevel <= 100) {
            alive.push(itemss)
        }

    })

    const [isModalVisibleCreate, setIsModalVisibleCreate] = useState(false);
    const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);

    function onChange(event: any) {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
        if (value === "") {
            return
        }
        UnitId(value)

    }

    const optionBrandLight: Highcharts.Options = {
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column',
            width: 380,
            height: 280,
            style: {
                color: 'black',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
            }
        },
        title: {
            text: 'Asset Life Chart'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: ' '
            }
        },
        colors: ['#9b9d9b', '#a7af20', '#1baf09'],
        series: [{
            type: 'column',
            name: '0%',
            data: [
                ['low life', lowlife.length],

            ]
        },
        {
            type: 'column',
            name: '1% to 50% ',
            data: [
                ['average life', averageLife.length],
            ]
        },
        {
            type: 'column',
            name: ' 51% to 100% ',
            data: [
                ['full life', alive.length],
            ]
        }

        ],
        xAxis: {
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },

    };

    const options: Highcharts.Options = {
        chart: {
            backgroundColor: "transparent",
            width: 380,
            height: 193,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: `Assets<br>${totalAssets}<br>`,
            align: 'center',
            verticalAlign: 'middle',
            y: -10,
            x: 50,
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
                center: ['65%', '46%'],
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
            <NavBar />
            <div className="container-manage-assets">
                <div className="asset-search-container">
                    <div className="asset-search-button">
                        <select name="option" className="unit-options" onChange={onChange}>
                            <option value="">Choose Unit</option>
                            {unit.map((item: any, index: any) => (<option key={index} value={item._id} >{item.name}</option>))}
                        </select>

                        {values.option === "" ? <div id="off" /> :
                            <div>
                                {!isModalVisibleCreate
                                    ?
                                    <button className="btn-open-modal" id="active" type="button" onClick={() => setIsModalVisibleCreate(true)} value="create" >Create Asset</button>
                                    :
                                    <CreateModalAsset unitId={unitId} onClose={() => setIsModalVisibleCreate(false)} />
                                }
                        
                                {!isModalVisibleDelete
                                    ?
                                    <button className="btn-open-modal" id="delete" type="button" onClick={() => setIsModalVisibleDelete(true)} value="create" >Delete Asset</button>
                                    :
                                    <DeleteModalAsset assets={assetsbyunit} onClose={() => setIsModalVisibleDelete(false)} />
                                }
                            </div>
                        }
                    </div>
                </div>
                <section>
                    {values.option === ""
                        ?
                        <div></div>
                        :
                        <div className="overview-asset-container-graphic">
                            {totalAssets ?
                                <div className="overview-asset-container-graphic-donut">

                                    <div className="overview-asset-graphic">
                                        <p>Status Asset</p>
                                        <HighchartsReact
                                            highcharts={Highcharts}
                                            options={options}
                                            ref={chartComponentRef}
                                            {...props}
                                        />
                                    </div>
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
                                </div>
                                :
                                <div className="no-overview-asset-container-graphic-donut">
                                    <h2>Asset Status Graph </h2>
                                    <p>this unit has {!totalAssets ? "0" : totalAssets} assets</p>
                                    <img src={nochart} alt="not chart asset" />
                                </div>

                            }
                            {totalAssets ?
                                <div className="overview-asset-container-graphic-column">
                                    <HighchartsReact
                                        highcharts={Highcharts}
                                        options={optionBrandLight}
                                        ref={chartComponentRef}
                                        {...props}
                                    />
                                </div>
                                : <div className="overview-asset-container-graphic-column">
                                    <h2>Graph HealthLevel</h2>
                                    <p>this unit has {!totalAssets ? "0" : totalAssets} assets</p>
                                    <img src={chart2} alt="no chart asset" />
                                </div>
                            }
                        </div>
                    }
                    {values.option === ""
                        ?
                        <div className="all-asset-container ">
                            {totalAssetsInAllUnits[0] ?
                                unit.map(item => item.asset.map((items, index) => (<Asset key={index} {...items} />)))
                                :
                                <div className="no-asset-container ">
                                    <h2>Create Assets</h2>
                                    <p>Choose a unit and create assets to manage your assets
                                    </p>
                                    <img id="noasset" src={createAsset} alt="no asset" />
                                </div>
                            }
                        </div>
                        :

                        <div className="asset-container ">
                            {totalAssets ?
                                assetsbyunit?.map((item: any, index: any) => (<Asset key={index} {...item} />))
                                :
                                <div className="asset-container">
                                    <h2>Assets</h2>
                                    <p>this unit has {!totalAssets ? "0" : totalAssets} assets</p>
                                    <img id="noasset" src={noasset3} alt="no chart asset" />
                                </div>
                            }
                        </div>
                    }
                </section>
            </div>
        </main>
    )
} 