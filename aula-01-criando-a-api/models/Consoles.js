import mongoose from "mongoose";

const consoleSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Console = mongoose.model('Console', consoleSchema);

export default Console;