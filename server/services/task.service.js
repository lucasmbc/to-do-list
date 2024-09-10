import TaskRepository from "../repositories/task.repository.js";

async function createTask(task) {
    return await TaskRepository.insertTask(task);
}

async function getTasks() {
    return await TaskRepository.getTasks();
}

async function updateTask(taskId, taskBody) {
    return await TaskRepository.updateTask(taskId, taskBody);
}

async function deleteTask(taskId) {
    await TaskRepository.deleteTask(taskId);
}

export default { createTask, getTasks, updateTask, deleteTask };
