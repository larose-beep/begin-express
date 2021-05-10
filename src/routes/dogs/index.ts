import { NextFunction, Request, Response, Router } from "express";
import { dogs, feeding } from "./dogs.controller";

export type TControllerFC = (
  req: Request,
  res: Response,
  next: NextFunction
) => unknown;

export const router = Router();

router.get("/", dogs);
router.get("/feeding", feeding);
