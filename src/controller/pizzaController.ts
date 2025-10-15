import { Request, Response } from "express";
import Pizza from "../models/pizzaModel.js";

export const getPizzas = async (_: Request, res: Response) => {
  try {
    const pizzas = await Pizza.find();
    console.log("🔹 Pizzos fetched:", pizzas.length);
    res.json(pizzas);
  } catch (error) {
    console.error("❌ GET /pizzas klaida:", error);
    res.status(500).json({ error: "Nepavyko gauti picų" });
  }
};



export const createPizza = async (req: Request, res: Response) => {
  try {
    const pizza = new Pizza(req.body);
    const saved = await pizza.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("❌ POST /pizzas klaida:", error);
    res.status(500).json({ error: "Nepavyko sukurti picos" });
  }
};
