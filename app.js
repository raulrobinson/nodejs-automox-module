import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

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
