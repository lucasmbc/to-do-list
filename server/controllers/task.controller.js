import TaskService from "../services/task.service.js";

async function createTask(req, res, next) {
    try {
        let task = req.body;

        if (!task.titulo) {
            throw new Error("Título é obrigatório.");
        }

        task = await TaskService.createTask(task);
        res.status(201).send(task);
        loggers.info(`POST / - ${JSON.stringify(task)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createTask,
};
