import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; //not connected.
import AuthRoute from "./Routes/AuthRoute.js";
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

//Database
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.MONGO_DB_URL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Stop server if DB is not connected
  }
};

connectDB();
//Server Listeners
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
