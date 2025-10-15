import { Router } from "express";
import { getUpsellProducts } from "../controller/upsellController.js";

const router = Router();

// GET /api/upsell
router.get("/", getUpsellProducts);

export default router;
