import Player from "../models/Player.js";

const MAX_PLAYERS = 20;

// CREATE ENTRY REQUEST
export const createPlayer = async (req, res) => {
  try {
    const { fullName, age, phone } = req.body;

    // Basic validation
    if (!fullName || !age || !phone) {
      return res.status(400).json({
        success: false,
        message: "Full name, age, and phone number are required.",
      });
    }

    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge < 18) {
      return res.status(400).json({
        success: false,
        message: "Participants must be at least 18 years old.",
      });
    }

    // Check current active entry request count (excluding rejected)
    const activeCount = await Player.countDocuments({ status: { $ne: "rejected" } });

    if (activeCount >= MAX_PLAYERS) {
      return res.status(409).json({
        success: false,
        message: "The Estate registration is currently at maximum capacity.",
      });
    }

    // Generate reference ID
    const bookingId = `EST-${Date.now()}`;

    const player = await Player.create({
      fullName: fullName.trim(),
      age: parsedAge,
      phone: phone.trim(),
      status: "pending",
      bookingId,
    });

    return res.status(201).json({
      success: true,
      message: "Entry request received successfully.",
      player: {
        id: player._id,
        bookingId: player.bookingId,
        fullName: player.fullName,
        age: player.age,
        phone: player.phone,
        status: player.status,
        createdAt: player.createdAt,
      },
    });
  } catch (error) {
    console.error("Create player error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your entry request.",
    });
  }
};


// GET PLAYER COUNT
export const getPlayerCount = async (req, res) => {
  try {
    const totalCount = await Player.countDocuments();
    const confirmedCount = await Player.countDocuments({ status: "confirmed" });
    const pendingCount = await Player.countDocuments({ status: "pending" });
    const contactedCount = await Player.countDocuments({ status: "contacted" });
    const rejectedCount = await Player.countDocuments({ status: "rejected" });

    return res.status(200).json({
      success: true,
      totalPlayers: totalCount,
      confirmedPlayers: confirmedCount,
      seatsRemaining: Math.max(MAX_PLAYERS - confirmedCount, 0),
      maxPlayers: MAX_PLAYERS,
      counts: {
        total: totalCount,
        pending: pendingCount,
        contacted: contactedCount,
        confirmed: confirmedCount,
        rejected: rejectedCount,
      },
    });
  } catch (error) {
    console.error("Player count error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch player count.",
    });
  }
};


// GET ALL PLAYERS
export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find()
      .sort({ createdAt: -1 })
      .select("-__v");

    return res.status(200).json({
      success: true,
      count: players.length,
      players,
    });
  } catch (error) {
    console.error("Get players error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch players.",
    });
  }
};


// UPDATE PLAYER STATUS
export const updatePlayerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "contacted", "confirmed", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value.",
      });
    }

    const player = await Player.findByIdAndUpdate(
      id,
      { status },
      { returnDocument: "after" }
    );

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Entry request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      player,
    });
  } catch (error) {
    console.error("Update player status error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to update status.",
    });
  }
};


// DELETE PLAYER ENTRY
export const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndDelete(id);

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Entry request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Entry request deleted successfully.",
    });
  } catch (error) {
    console.error("Delete player error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to delete entry request.",
    });
  }
};