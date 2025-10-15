import { Request, Response } from "express";
import Upsell from "../models/upsellModel.js";

export const getUpsellProducts = async (req: Request, res: Response) => {
  try {
    const products = await Upsell.find();
    res.json(products);
  } catch (err) {
    console.error("❌ Nepavyko gauti upsell produktų:", err);
    res.status(500).json({ message: "Serverio klaida" });
  }
};
