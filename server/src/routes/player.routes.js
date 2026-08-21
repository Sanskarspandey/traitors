import express from "express";

import {
  createPlayer,
  getPlayerCount,
  getAllPlayers,
  updatePlayerStatus,
  deletePlayer,
} from "../controllers/player.controller.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

// PUBLIC: User registration
router.post("/", createPlayer);

// ADMIN ONLY: Protected with JWT adminAuth
router.get("/count", adminAuth, getPlayerCount);

router.get("/", adminAuth, getAllPlayers);

router.patch("/:id/status", adminAuth, updatePlayerStatus);

router.delete("/:id", adminAuth, deletePlayer);

export default router;