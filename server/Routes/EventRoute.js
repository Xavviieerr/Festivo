import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import {
  addEvent,
  allEvents,
  deleteEvent,
  userEvent,
} from "../Controllers/EventController.js";

const router = express.Router();

router.post("/newevent/:id", authenticateToken, addEvent);
router.get("/allevents", authenticateToken, allEvents);
router.get("/userevent/:id", authenticateToken, userEvent);
router.delete("/deleteevent/:id", authenticateToken, deleteEvent);

export default router;
