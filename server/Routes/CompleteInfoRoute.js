import express from "express";
import { completeUserInfo } from "../Controllers/CompleteInfoController.js";

const router = express.Router();

router.post("/completeuserinfo", completeUserInfo);

export default router;
