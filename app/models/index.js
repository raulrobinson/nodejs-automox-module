import dbConfig from '../config/db.js';
import Sequelize from 'sequelize';
import registerModel from './register.model.js';
import mysql2 from 'mysql2';

// const sequelize = new Sequelize({
//     host: dbConfig.HOST,
//     username: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     dialect: "mysql",
//     database: dbConfig.DB,
//     benchmark: true,
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// });

const sequelize = new Sequelize(
    process.env.BD_BBDD,
    process.env.BD_USER,
    process.env.BD_PASS,
    {
        dialect: 'mysql',
        dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
        host: process.env.BD_HOST,
        port: '3306'
    }
)

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

db.registers = registerModel(sequelize, Sequelize);

export default db;
