import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from "./Routes/AuthRoute.js";
import FriendRoute from "./Routes/FriendRoute.js";
import { MongoClient, ServerApiVersion } from "mongodb";

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
app.use("/friend", FriendRoute);

// , {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
connectDB();

//Server Listeners
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
