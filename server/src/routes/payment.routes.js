import express from "express";

import {
  createPaymentOrder,
  verifyPayment,
} from "../controllers/payment.controller.js";

const router = express.Router();


// Create Razorpay order

router.post(
  "/create-order",
  createPaymentOrder
);


// Verify payment

router.post(
  "/verify",
  verifyPayment
);


export default router;