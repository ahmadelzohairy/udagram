import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: 'postgres',
  password: 'qsmn123QSMN',
  database: 'postgres',
  host: 'database-2.cgtr4v3xqnma.us-east-1.rds.amazonaws.com',
  port: 5432,

  dialect: "postgres",
  storage: ":memory:",
});