const mongoose = require("mongoose");

const { Schema } = mongoose;


//Esctructura
const schema = new Schema({
    name: { type: String, required: true, unique: true },
    products: [{ type: [mongoose.ObjectId], ref: "Product" }],
});

//Creando el modelo category, se crea el objeto que va a interactuar con la base de datos
const model = mongoose.model("Category", schema);

module.exports = {
    schema,
    model,
};