import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import playerRoutes from "./routes/player.routes.js";
import paymentRoutes from "./routes/payment.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI;

// ==============================
// CORS CONFIGURATION
// ==============================

const defaultDevOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  "http://127.0.0.1:5175",
];

const configuredOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((url) => url.trim().replace(/\/+$/, ""))
  : [];

const isProduction = process.env.NODE_ENV === "production";

// In production, strictly restrict to configured CLIENT_URL. In development, allow localhost ports.
const allowedOrigins = isProduction
  ? configuredOrigins
  : [...defaultDevOrigins, ...configuredOrigins];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS policy: Access denied for this origin."));
    },
    credentials: true,
  })
);

// ==============================
// MIDDLEWARE
// ==============================

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
// API ROUTES
// ==============================

app.use("/api/auth", authRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/payments", paymentRoutes);

// ==============================
// GLOBAL ERROR HANDLER
// ==============================

app.use((err, req, res, next) => {
  console.error("Server error:", err.message);
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "An unexpected error occurred. Please try again later.",
  });
});

// ==============================
// DATABASE & SERVER STARTUP
// ==============================

const startServer = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is missing from .env");
    }

    await mongoose.connect(MONGO_URI);

    console.log("✓ MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`🏰 The Estate server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();