import { Unit } from "../models/unit";

class ListUnitService {
  async execute(id_Company: string) {
    const unitModel = Unit;

    const unit = await unitModel.find({ company: id_Company }).populate('asset');

    return unit;
  }
}

export { ListUnitService };