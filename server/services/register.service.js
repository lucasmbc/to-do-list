import RegisterRepository from "../repositories/register.repository.js";

async function createUser(user) {
    return await RegisterRepository.insertUser(user);
}

export default { createUser };
