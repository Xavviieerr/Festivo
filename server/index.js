import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//route
app.get("/", (req, res) => {
  res.send("Server is running ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
