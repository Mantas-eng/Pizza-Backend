import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import pizzaRoutes from "./routes/pizzaRoutes.js";
import wrapRoutes from "./routes/wrapRoutes.js";
import drinkRoutes from "./routes/drinkRoutes.js";
import specialRoutes from "./routes/specialRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import upsellRoutes from "./routes/upsellRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Prisijungimas prie DB
connectDB();

// Maršrutai
app.use("/api/pizzas", pizzaRoutes);
app.use("/api/wraps", wrapRoutes);
app.use("/api/drinks", drinkRoutes);
app.use("/api/specials", specialRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/upsell", upsellRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 MantasPizza API paleistas ant ${PORT}`);
});
