import express from "express";
import cors from "cors";
import winston from "winston";
import "./env.js";

const port = process.env.port;

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "to-do-list-api.log" }),
    ],
    format: combine(label({ label: "to-do-list-api" }), timestamp(), myFormat),
});

const app = express();

app.use(express.json());
app.use(cors());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/tasks", tasksRouter);

app.listen(port, () => logger.info("API Started!"));