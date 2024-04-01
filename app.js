import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./app/models/index.js";

const app = express();
dotenv.config();

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const app_ids = [
    process.env.APP_ID_MAIN,
    process.env.APP_ID_SUB
];

db.sequelize.sync()
    .then(() => {
        console.log('Synced with the remote database');
    })
    .catch((error) => {
        console.log(`Failed to sync db: ${ error.message }`);
    })

app.use((req, res, next) => {
    const appId = req.headers['app_id'];
    if (app_ids.includes(appId)) {
        next();
    } else {
        res.status(403).send('Access Denied.');
    }
});

app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

app.get('/about', (req, res) => {
    res.send('About route 🎉 ')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running port ${port}`);
});
