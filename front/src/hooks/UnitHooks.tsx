import { useCallback, useState } from "react";
import { UnitService } from "../services/UnitService";
import { IUnit } from "../interfaces";

export const useUnit = () => {
    const [unit, setUnit] = useState<IUnit[]>([]);
    const [unitId, setUnitId] = useState<IUnit[]>([]);

    const Units = useCallback(async (id_Company: string) => {
        const { data, status } = await UnitService.getUnit(id_Company);

        if (status !== 200) throw new Error();

        setUnit(data)
    }, [])
    const UnitId = useCallback(async (id:string) => {
        const { data, status } = await UnitService.getUnitId(id);

        if (status !== 200) throw new Error();

        setUnitId(data)
    }, [])

    return {
        Units,
        unit,
        UnitId,
        unitId
    }
}