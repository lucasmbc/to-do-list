import { body } from "express-validator";

const validate = (method) => {
    switch (method) {
        case "createUser": {
            return [
                body("nome", "Nome é obrigatório").exists().notEmpty(),
                body("email", "Email é obrigatório").exists().notEmpty(),
                body("senha", "Senha é obrigatória").exists().notEmpty(),
            ];
        }
    }
};

export default { validate };
