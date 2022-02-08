import { useCallback, useState } from "react"
import { AssetService } from "../services/AssetService";
import { IAsset } from "../interfaces"

export const useAsset = () => {
    const [asset, setAsset] = useState<IAsset[]>([])

    const Asset = useCallback(async (Unit_id: string) => {
        const { data, status } = await AssetService.getAsset(Unit_id);

        if (status !== 200) throw new Error();

        setAsset(asset);
    }, [])

    return {
        Asset,
        asset
    }
}