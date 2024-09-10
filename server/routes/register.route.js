import express from "express";
import RegisterController from "../controllers/register.controller.js";

const router = express.Router();

router.post("/", RegisterController.createUser);

export default router;
