import express from "express";
import { addFriend } from "../Controllers/FriendController.js";
import { authenticateToken } from "../middleware/auth.js";
const router = express.Router();

router.post("/newfriend", authenticateToken, addFriend);

export default router;
