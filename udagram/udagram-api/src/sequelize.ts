import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: "postgres",
  password: "postgres",
  database: "postgres",
  host: "database-1.cwv5p0wivsj4.us-east-1.rds.amazonaws.com",

  dialect: "postgres",
  storage: ":memory:",
});
