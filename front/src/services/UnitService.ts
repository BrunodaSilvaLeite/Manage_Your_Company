import { Api } from "../providers/index";
import { IUnit } from "../interfaces";

const getUnit = (id_Company:string) => Api.get<IUnit[]>(`/ListUnit/${id_Company}`)
const getUnitId = (id:string) => Api.get<IUnit[]>(`/unit/${id}`)
export const UnitService = {
    getUnit,
    getUnitId
} 