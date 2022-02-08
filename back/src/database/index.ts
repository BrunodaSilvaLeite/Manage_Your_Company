import mongoose from "mongoose";

mongoose.connect(`mongodb:${ process.env.MONGO_LOCALHOST}`);
mongoose.Promise = global.Promise;

export { mongoose };