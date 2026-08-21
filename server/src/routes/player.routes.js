import express from "express";

import {
  createPlayer,
  getPlayerCount,
  getAllPlayers,
  updatePlayerStatus,
  deletePlayer,
} from "../controllers/player.controller.js";

const router = express.Router();

router.post("/", createPlayer);

router.get("/count", getPlayerCount);

router.get("/", getAllPlayers);

router.patch("/:id/status", updatePlayerStatus);

router.delete("/:id", deletePlayer);

export default router;