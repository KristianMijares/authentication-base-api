import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize';
import { IDatabaseConfig } from './interfaces/db-config.interface';

dotenv.config();

export const databaseConfiguration: IDatabaseConfig = {
  development: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME_DEVELOPMENT as string,
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    dialect: process.env.DB_DIALECT as Dialect,
  },
  production: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME_PRODUCTION as string,
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    dialect: process.env.DB_DIALECT as Dialect,
  },
};
