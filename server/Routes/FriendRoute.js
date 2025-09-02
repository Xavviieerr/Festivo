import express from "express";
import {
  addFriend,
  allFriends,
  deleteFriend,
} from "../Controllers/FriendController.js";
import { authenticateToken } from "../middleware/auth.js";
const router = express.Router();

router.post("/newfriend", authenticateToken, addFriend);
router.get("/allfriends", authenticateToken, allFriends);
router.delete("/deletefriend/:id", authenticateToken, deleteFriend);

export default router;
