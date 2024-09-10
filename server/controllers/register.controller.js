import RegisterService from "../services/register.service.js";

async function createUser(req, res, next) {
    try {
        let user = req.body;

        if (!user.nome || !user.email || !user.senha) {
            throw new Error("Nome, email e senha são obrigatórios.");
        }

        user = await RegisterService.createUser(user);
        res.status(201).send(user);
        logger.info(`POST / - ${JSON.stringify(user)}`);
    } catch (err) {
        next(err);
    }
}

export default { createUser };
