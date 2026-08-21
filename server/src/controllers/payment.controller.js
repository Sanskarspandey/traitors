import crypto from "crypto";

import razorpay from "../config/razorpay.js";

import Player from "../models/Player.js";


// ============================================
// CREATE RAZORPAY ORDER
// ============================================

export const createPaymentOrder = async (req, res) => {

  try {

    const { playerId } = req.body;

    if (!playerId) {

      return res.status(400).json({
        success: false,
        message: "Player ID is required.",
      });

    }


    // Find player

    const player = await Player.findById(playerId);

    if (!player) {

      return res.status(404).json({
        success: false,
        message: "Player not found.",
      });

    }


    // Prevent paying twice

    if (player.paymentStatus === "paid") {
      return res.status(400).json({
        success: false,
        message: "This player has already paid.",
      });
    }

    if (!razorpay) {
      return res.status(503).json({
        success: false,
        message: "Online payments are currently disabled. Registration is handled manually.",
      });
    }

    // ₹6,000
    // Razorpay expects amount in paise

    const amount = 6000 * 100;


    const options = {

      amount,

      currency: "INR",

      receipt: player.bookingId,

      notes: {
        playerId: player._id.toString(),
        bookingId: player.bookingId,
      },

    };


    const order = await razorpay.orders.create(options);
    player.razorpayOrderId = order.id;

await player.save();

    return res.status(200).json({

      success: true,

      order: {

        id: order.id,

        amount: order.amount,

        currency: order.currency,

      },

    });

  } catch (error) {

    console.error(
      "Create payment order error:",
      error
    );

    return res.status(500).json({

      success: false,

      message:
        "Unable to create payment order.",

    });

  }

};



// ============================================
// VERIFY PAYMENT
// ============================================
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_signature,
      playerId,
    } = req.body;

    if (
      !razorpay_payment_id ||
      !razorpay_signature ||
      !playerId
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment verification data is incomplete.",
      });
    }

    // Find player
    const player = await Player.findById(playerId);

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Player not found.",
      });
    }

    // Make sure an order was created for this player
    if (!player.razorpayOrderId) {
      return res.status(400).json({
        success: false,
        message: "No Razorpay order found for this player.",
      });
    }

    // Prevent duplicate payment
    if (player.paymentStatus === "paid") {
      return res.status(400).json({
        success: false,
        message: "This booking has already been paid.",
      });
    }

    // The order ID comes from OUR database.
    const body =
      player.razorpayOrderId +
      "|" +
      razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body)
      .digest("hex");

    // Timing-safe signature comparison
    const expectedBuffer = Buffer.from(
      expectedSignature,
      "utf8"
    );

    const receivedBuffer = Buffer.from(
      razorpay_signature,
      "utf8"
    );

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(
        expectedBuffer,
        receivedBuffer
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed.",
      });
    }

    // Payment is authentic
    player.paymentStatus = "paid";
    player.paymentId = razorpay_payment_id;

    await player.save();

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully.",

      booking: {
        bookingId: player.bookingId,
        paymentStatus: player.paymentStatus,
      },
    });

  } catch (error) {
    console.error(
      "Payment verification error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to verify payment.",
    });
  }
};