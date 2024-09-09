import express from "express";
import TaskController from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", TaskController.createTask);
router.get("/", TaskController.getTasks);
router.put("/:taskId", TaskController.updateTask);
router.delete("/:taskId", TaskController.deleteTask);

export default router;
