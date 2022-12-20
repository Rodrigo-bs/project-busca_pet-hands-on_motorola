import { Sequelize  } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const configMysql: Object = {
    dialect: 'mysql',
    port: parseInt(process.env.MYSQL_PORT as string)
};

const database: Sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    configMysql
);

export default database;