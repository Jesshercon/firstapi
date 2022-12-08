const mongoose = require("mongoose");
const config = require("./config");

const connect = () => {
    return new Promise((resolve, reject) => {
        const { user, password, host } = config.db;


        mongoose.connect(`mongodb+srv://${user}:${password}@${host}/ecommerce?retryWrites=true&w=majority`);
        console.log(config.db);
        const db = mongoose.connection;

        db.on("connected", () => {
            console.log("Connection successful ");
            resolve(mongoose);
        });

        db.on("connected", (err) => {
            console.log("Connection failed", err);
            reject(err);
        });
    });
};

module.exports = { connect };