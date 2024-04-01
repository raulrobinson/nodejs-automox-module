import dotenv from "dotenv";
dotenv.config();

export default {
    HOST: process.env.BD_HOST,
    USER: process.env.BD_USER,
    PASSWORD: process.env.BD_PASS,
    DB: process.env.BD_BBDD,
    dialect: "mysql2",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}