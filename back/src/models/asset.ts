import { mongoose } from "../database";

const AssetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        
    },

    description: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    owner: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },

    healthLevel: {
        type: Number,
        required: true,
        default: 0
    },

    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
        required: true,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },

    created_at: {
        type: Date,
        default: Date.now,
    },
})

const Asset = mongoose.model("Asset", AssetSchema);

export { Asset };