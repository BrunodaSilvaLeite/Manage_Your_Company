import { Unit } from "../models/unit"
import { Asset } from "../models/asset";

class DeletUnitService {
    async execute(id: string) {
        const unitModel = Unit;
        const assetModel = Asset;
        
        const unitAlreadyExists = await unitModel.findOne({ id });
        
        if (!unitAlreadyExists) {
            throw new Error("The Unit already exists!");
        }
     
        await unitModel.remove({_id: id });
        await assetModel.remove({ unit: id });
       return
    }
}

export { DeletUnitService };