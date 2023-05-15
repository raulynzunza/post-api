import Sequelize from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from '../config.js'

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  port: DB_PORT
});