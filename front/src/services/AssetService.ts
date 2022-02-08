import { Api } from "../providers/index";
import { IAsset } from "../interfaces";


const getAsset = (Unit_id:string) => Api.get<IAsset[]>(`/ListAsset/${Unit_id}`)

export const AssetService = {
    getAsset
}