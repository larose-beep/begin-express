import { NextFunction } from "connect";
import { Request, Response } from "express";
import { environment } from "../utils";

const { NODE_ENV } = environment;

type TErrorHandlerMiddlewareFC = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => unknown;

export const errorHandler: TErrorHandlerMiddlewareFC = (
  error,
  req,
  res,
  next
) => {
  const status = res.statusCode !== 200 ? res.statusCode : 500;

  const payload: any = { message: error.message };

  if (NODE_ENV === "development") payload.stack = error.stack;

  res.status(status).json(payload);

  console.error(error);
};
