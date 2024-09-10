import { where } from "sequelize";
import Task from "../models/task.model.js";

async function insertTask(task) {
    try {
        return await Task.create(task);
    } catch (err) {
        throw err;
    }
}

async function getTasks() {
    try {
        return await Task.findAll();
    } catch (err) {
        throw err;
    }
}

async function updateTask(taskId, taskBody) {
    try {
        return await Task.update(taskBody, {
            where: {
                id: taskId,
            },
        });
    } catch (err) {
        throw err;
    }
}

async function deleteTask(taskId) {
    try {
        return await Task.destroy({
            where: {
                id: taskId,
            },
        });
    } catch (err) {
        throw err;
    }
}

export default { insertTask, getTasks, updateTask, deleteTask };
