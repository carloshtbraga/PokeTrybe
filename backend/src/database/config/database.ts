import 'dotenv/config';
import { type Options } from 'sequelize';

const config: Options = {
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASS ?? 'password',
    database: process.env.DB_NAME ?? 'Trybedex',
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT) ?? 3306,
    dialect: 'mysql'
};

export = config;
