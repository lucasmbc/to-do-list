import Sequelize from "sequelize";

const sequelize = new Sequelize(process.env.CONNECTION_STRING_MYSQL, {
    dialect: "mysql",
});

export default sequelize;
