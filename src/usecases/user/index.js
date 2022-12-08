const { hashPassword, verifyPassword } = require("../../lib/encrypt");
const User = require("../../models/user").model;


const create = async (data) => {
    const { email, password, firstName, lastName } = data;
    const hash = await hashPassword(password);
    const user = new User({ email, password: hash, firstName, lastName });
    return await user.save();
};

const authenticate = async (example, password) => {
    const user = await User.findById(userId);
    const { hash } = user.password;

    if (verifyPassword(password, hash)) {
        //regresamos el token
    } else {
        return false;
    }
};

const getByEmail = async (email) => {
    // try {
    //     const userEmail = await User.find({ email });

    //     if (userEmail) {
    //         res.json({
    //             ok: true,
    //             payload: { userEmail },
    //         });
    //     } else {
    //         res.status(400).json()
    //     }

    // } catch (error) {

    // }
    return await User.find({ email });
};
const getAll = async () => await User.find({}).exec();

module.exports = {
    create,
    getAll,
    authenticate,
    getByEmail
};

//endopoint que permita buscar y devuelva al usuario por mail
