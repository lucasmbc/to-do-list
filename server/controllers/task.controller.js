import TaskService from "../services/task.service.js";

async function createTask(req, res, next) {
    try {
        let task = req.body;

        if (!task.titulo) {
            throw new Error("Título é obrigatório.");
        }

        task = await TaskService.createTask(task);
        res.status(201).send(task);
        logger.info(`POST / - ${JSON.stringify(task)}`);
    } catch (err) {
        next(err);
    }
}

async function getTasks(req, res, next) {
    try {
        res.send(await TaskService.getTasks());
        logger.info(`GET /tasks`);
    } catch (err) {
        next(err);
    }
}

async function updateTask(req, res, next) {
    try {
        const taskId = req.params.taskId;
        const taskBody = req.body;

        await TaskService.updateTask(parseInt(taskId), taskBody);

        res.status(201).send(req.body);
        logger.info(`PUT / - ${JSON.stringify(taskBody)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteTask(req, res, next) {
    try {
        await TaskService.deleteTask(req.params.taskId);
        res.end();
        logger.info(`DELETE /tasks/:taskId`);
    } catch (err) {
        next(err);
    }
}

export default {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
};
