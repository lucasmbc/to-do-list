import DataTypes from "sequelize";
import db from "../repositories/db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

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

User.beforeCreate(async (user, options) => {
    try {
        const hash = await bcrypt.hash(user.senha, saltRounds);
        user.senha = hash;
    } catch (err) {
        throw new Error(err);
    }
});

export default User;
