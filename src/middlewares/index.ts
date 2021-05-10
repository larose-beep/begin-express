import { NextFunction } from "connect";
import { Request, Response } from "express";

export type TMiddlewareFC = (
  req: Request,
  res: Response,
  next: NextFunction
) => unknown;

export * from "./errorHandler";
