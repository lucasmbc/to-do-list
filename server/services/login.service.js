import RegisterRepository from "../repositories/register.repository.js";
import jwt from "jsonwebtoken";

async function getUserEmail(email) {
    return await RegisterRepository.getUserEmail(email);
}

const gererateToken = (id) =>
    jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

export { getUserEmail, gererateToken };
