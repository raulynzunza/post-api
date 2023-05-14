import Sequelize from "sequelize";

export const sequelize = new Sequelize("postsdb", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});