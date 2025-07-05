import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from "./Routes/AuthRoute.js";

//express app initialization
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Environment variables
dotenv.config();

//Routes

app.get("/", (req, res) => {
  res.send("Server is running ");
});

//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

//usage of routes
app.use("/auth", AuthRoute);
