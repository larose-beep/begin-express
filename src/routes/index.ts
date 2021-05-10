import { Router } from "express";
import { router as cats } from "./cats";
import { router as dogs } from "./dogs";

export const router = Router();

router.use("/api/cats", cats);
router.use("/api/dogs", dogs);
