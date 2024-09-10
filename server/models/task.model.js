import DataTypes from "sequelize";
import db from "../repositories/db.js";
import User from "./register.model.js";

const Task = db.define(
    "tarefas",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.ENUM("pendente", "em_progresso", "concluida"),
            defaultValue: "pendente",
        },
    },
    { underscored: true }
);

Task.belongsTo(User, { foreignKey: "usuarioId" });

export default Task;
