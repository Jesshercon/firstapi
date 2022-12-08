const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    email: { type: String, requiered: true, trim: true },
    password: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true }
});

const model = mongoose.model("User", schema);

module.exports = {
    model,
    schema,
};