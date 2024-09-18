import User from "../models/register.model.js";

async function insertUser(user) {
    try {
        return await User.create(user);
    } catch (err) {
        throw err;
    }
}

async function getUserEmail(email) {
    try {
        return await User.findOne({ where: { email: email } });
    } catch (err) {
        throw err;
    }
}

async function findByIdUser(id) {
    try {
        return await User.findOne({ where: { id: id } });
    } catch (err) {
        throw err;
    }
}

export default { insertUser, getUserEmail, findByIdUser };
