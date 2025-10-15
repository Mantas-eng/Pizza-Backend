import express from "express";
import { getWraps, createWrap } from "../controller/wrapController.js";

const router = express.Router();
router.get("/", getWraps);
router.post("/", createWrap);

export default router;
