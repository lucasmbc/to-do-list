import DataTypes from "sequelize";
import db from "../repositories/db.js";

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
// TODO Configurar a chave estrangeira usuario_id
export default Task;
