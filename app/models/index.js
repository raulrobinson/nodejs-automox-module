import dbConfig from '../config/db.js';
import Sequelize from 'sequelize';
import registerModel from './register.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

db.registers = registerModel(sequelize, Sequelize);

export default db;
