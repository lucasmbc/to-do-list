import Task from "../models/task.model.js";

async function insertTask(task) {
    try {
        return await Task.create(task);
    } catch (err) {
        throw err;
    }
}

export default { insertTask };
