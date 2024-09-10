import DataTypes from "sequelize";
import db from "../repositories/db.js";

const User = db.define(
    "usuarios",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { underscored: true }
);

export default User;
