import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; //not connected.
import AuthRoute from "./Routes/AuthRoute.js";

//express app initialization
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Environment variables
dotenv.config();

//routes
app.use("/auth", AuthRoute);

//Server Listeners
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
