import { Request, Response } from "express";
import Special from "../models/specialModel.js";

export const getSpecials = async (_: Request, res: Response) => {
  try {
    const specials = await Special.find();
    console.log("🔹 Specials fetched:", specials.length);
    res.json(specials);
  } catch (error) {
    console.error("❌ GET /specials klaida:", error);
    res.status(500).json({ error: "Nepavyko gauti specialių pasiūlymų" });
  }
};

export const createSpecial = async (req: Request, res: Response) => {
  try {
    const special = new Special(req.body);
    const saved = await special.save();
    console.log("✅ Special sukurtas:", saved.title);
    res.status(201).json(saved);
  } catch (error) {
    console.error("❌ POST /specials klaida:", error);
    res.status(500).json({ error: "Nepavyko sukurti specialaus pasiūlymo" });
  }
};
