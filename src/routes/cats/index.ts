import { NextFunction, Request, Response, Router } from "express";
import { cats, feeding } from "./cats.controller";

export type TControllerFC = (
  req: Request,
  res: Response,
  next: NextFunction
) => unknown;

export const router = Router();

router.get("/", cats);
router.get("/feeding", feeding);
