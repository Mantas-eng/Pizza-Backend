import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Stripe Secret
if (!process.env.STRIPE_SECRET_KEY)
  throw new Error("STRIPE_SECRET_KEY missing");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-09-30.clover",
});

// Debug middleware
router.use((req, res, next) => {
  console.log("REQ BODY:", req.body);
  next();
});

router.post("/", async (req, res) => {
  const cartItems = req.body?.cartItems; // saugus destructuring
  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0)
    return res.status(400).json({ error: "Cart empty" });

  try {
    const line_items = cartItems.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: { name: item.name, images: [item.image] },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Stripe session creation failed" });
  }
});

export default router;
