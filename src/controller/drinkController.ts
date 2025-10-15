import { Request, Response } from "express";
import Drink from "../models/drinkModel.js";

export const getDrinks = async (_: Request, res: Response) => {
  try {
    const drinks = await Drink.find();
    console.log("🔹 Drinks fetched:", drinks.length);
    res.json(drinks);
  } catch (error) {
    console.error("❌ GET /drinks klaida:", error);
    res.status(500).json({ error: "Nepavyko gauti gėrimų" });
  }
};

export const createDrink = async (req: Request, res: Response) => {
  try {
    const drink = new Drink(req.body);
    const saved = await drink.save();
    console.log("✅ Drink sukurtas:", saved.name);
    res.status(201).json(saved);
  } catch (error) {
    console.error("❌ POST /drinks klaida:", error);
    res.status(500).json({ error: "Nepavyko sukurti gėrimo" });
  }
};
