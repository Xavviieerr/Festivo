import express from "express";
import {
  loginUser,
  registerUser,
  updateDetails,
} from "../Controllers/AuthControllers.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/update", authenticateToken, updateDetails);

export default router;
