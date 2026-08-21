import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 18,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "contacted", "confirmed", "rejected"],
      default: "pending",
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
    },

    emergencyName: {
      type: String,
      trim: true,
      default: null,
    },

    emergencyPhone: {
      type: String,
      trim: true,
      default: null,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },

    paymentId: {
      type: String,
      default: null,
    },
    razorpayOrderId: {
      type: String,
      default: null,
    },
    bookingId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model("Player", playerSchema);

export default Player;