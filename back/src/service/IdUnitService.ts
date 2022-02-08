import { Unit } from "../models/unit";

class IdUnitService {
  async execute(id: string) {
    const unitModel = Unit;

    const unit = await unitModel.find({ _id: id }).populate('asset');

    return unit;
  }
}

export { IdUnitService };