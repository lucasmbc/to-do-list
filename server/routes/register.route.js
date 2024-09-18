import express from "express";
import RegisterController from "../controllers/register.controller.js";
import RegisterValidate from "../validators/register.validator.js";

const router = express.Router();

router.post(
    "/",
    RegisterValidate.validate("createUser"),
    RegisterController.createUser
);

export default router;
