import { Request, Response } from "express";
import Wrap from "../models/wrapModel.js";

export const getWraps = async (_: Request, res: Response) => {
  try {
    const wraps = await Wrap.find();
    console.log("🔹 Wraps fetched:", wraps.length);
    res.json(wraps);
  } catch (error) {
    console.error("❌ GET /wraps klaida:", error);
    res.status(500).json({ error: "Nepavyko gauti wrap’ų" });
  }
};

export const createWrap = async (req: Request, res: Response) => {
  try {
    const wrap = new Wrap(req.body);
    const saved = await wrap.save();
    console.log("✅ Wrap sukurtas:", saved.name);
    res.status(201).json(saved);
  } catch (error) {
    console.error("❌ POST /wraps klaida:", error);
    res.status(500).json({ error: "Nepavyko sukurti wrap’o" });
  }
};
