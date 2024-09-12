import bcrypt from "bcrypt";
import { getUserEmail, gererateToken } from "../services/login.service.js";

async function login(req, res, next) {
    try {
        const { email, senha } = req.body;

        const user = await getUserEmail(email);

        if (!user) {
            throw new Error("Senha ou usuário inválido.");
        }

        const passwordIsValid = bcrypt.compareSync(senha, user.senha);

        if (!passwordIsValid) {
            throw new Error("Senha ou usuário inválido.");
        }

        const token = gererateToken(user.id);

        res.send({ token });
        logger.info(`POST / - Login ok`);
    } catch (err) {
        next(err);
    }
}

export default { login };
