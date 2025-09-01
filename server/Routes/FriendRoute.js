import express from "express";
import { addFriend, allFriends } from "../Controllers/FriendController.js";
import { authenticateToken } from "../middleware/auth.js";
const router = express.Router();

router.post("/newfriend", authenticateToken, addFriend);
router.get("/allfriends", authenticateToken, allFriends);

export default router;
