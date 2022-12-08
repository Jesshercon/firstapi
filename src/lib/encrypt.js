const bcrypt = require("bcrypt");


//funcion que nos permite encriptar datos
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

//funcion que me permite comparar el hash con la función en texto

const verifyPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = { hashPassword, verifyPassword };