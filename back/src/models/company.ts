import { mongoose } from "../database";

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  image: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },


});

const Company = mongoose.model("Company", CompanySchema);

export { Company };
