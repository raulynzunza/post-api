import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Posts } from "./Posts.js";

export const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
      null: true,
    },
  },
  {
    timestamps: true,
  }
);
