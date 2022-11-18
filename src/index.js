import express from "express";
import joi from "joi";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());


app.listen(5000, () => console.log("Port 5000"));