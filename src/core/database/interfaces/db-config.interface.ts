import { Dialect } from 'sequelize';

export interface IDatabaseConfigAttributes {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect?: Dialect;
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
