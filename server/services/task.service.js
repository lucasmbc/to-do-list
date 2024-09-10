import TaskRepository from "../repositories/task.repository.js";

async function createTask(task) {
    return await TaskRepository.insertTask(task);
}

export default { createTask };
