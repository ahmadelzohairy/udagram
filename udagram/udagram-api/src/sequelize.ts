import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host, //"database-1.cwv5p0wivsj4.us-east-1.rds.amazonaws.com",

  dialect: "postgres",
  storage: ":memory:",
});
