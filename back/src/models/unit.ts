import { mongoose } from "../database";

const UnitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    
    asset: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asset'
    }],

    created_at: {
        type: Date,
        default: Date.now,
    },
})

const Unit = mongoose.model('Unit', UnitSchema)

export { Unit }