import RegisterService from "../services/register.service.js";
import { validationResult } from "express-validator";

async function createUser(req, res, next) {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            throw new Error(JSON.stringify(result.array(), null, 2));
        }

        let user = req.body;

        user = await RegisterService.createUser(user);
        res.status(201).send(user);
        logger.info(`POST / - ${JSON.stringify(user)}`);
    } catch (err) {
        next(err);
    }
}

export default { createUser };
