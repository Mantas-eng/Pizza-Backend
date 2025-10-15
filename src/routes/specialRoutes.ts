import express from "express";
import { getSpecials, createSpecial } from "../controller/specialController.js";

const router = express.Router();
router.get("/", getSpecials);
router.post("/", createSpecial);

export default router;
