import * as dotenv from "dotenv";
dotenv.config();

import { DataSource } from "typeorm";
import { Data } from "./entity/Data";

const envData = process.env;
const HOST = envData.DB_HOST;
const PASS = envData.DB_PASSWORD;
const PORT = parseInt(envData.DB_PORT as string);
const USER = envData.DB_USERNAME;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: PORT,
  username: USER,
  password: PASS,
  database: "typeormdb",
  synchronize: true,
  entities: [Data],
  logging: true,
});
