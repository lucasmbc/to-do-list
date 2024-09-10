import User from "../models/register.model.js";

async function insertUser(user) {
    try {
        return await User.create(user);
    } catch (err) {
        throw err;
    }
}

export default { insertUser };
