import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import paymentRoutes from "./routes/payment.routes.js";
import playerRoutes from "./routes/player.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI;


// ==============================
// MIDDLEWARE
// ==============================

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(morgan("dev"));


// ==============================
// HEALTH CHECK
// ==============================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "The Estate API is running",
  });
});


// ==============================
// PLAYER ROUTES
// ==============================

app.use("/api/players", playerRoutes);
app.use("/api/payments", paymentRoutes);

// ==============================
// DATABASE
// ==============================

const startServer = async () => {
  try {

    if (!MONGO_URI) {
      throw new Error("MONGO_URI is missing from .env");
    }

    await mongoose.connect(MONGO_URI);

    console.log("✓ MongoDB connected");

    app.listen(PORT, () => {
      console.log(
        `🏰 The Estate server running on port ${PORT}`
      );
    });

  } catch (error) {

    console.error(
      "❌ Server startup failed:",
      error.message
    );

    process.exit(1);
  }
};

startServer();