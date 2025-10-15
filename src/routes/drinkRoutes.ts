import express from "express";
import { getDrinks, createDrink } from "../controller/drinkController.js";

const router = express.Router();
router.get("/", getDrinks);
router.post("/", createDrink);

export default router;
