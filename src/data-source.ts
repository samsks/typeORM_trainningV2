import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT!),
  database: process.env.DB,

  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, "./entities/**.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
});

export default AppDataSource;
