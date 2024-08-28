import express from 'express';
import { getMagang, getMagangByidMagang, createMagang, updateMagang, deleteMagang } from '../controller/ControllerMagang.js';

const router = express.Router();
router.get("/", getMagang);
router.get("/find", getMagangByidMagang);
router.post("/create", createMagang);
router.put("/update", updateMagang);
router.delete("/delete", deleteMagang);
export default router;