import express from "express";
import { adminLogin, verifyAuth } from "../controllers/auth.controller.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

// Public login endpoint
router.post("/login", adminLogin);

// Protected token verification endpoint
router.get("/verify", adminAuth, verifyAuth);

export default router;
