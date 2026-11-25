import { NextFunction, Request, Response } from "express";

const globalErrorHnadler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statuscode = error.statusCode ?? 500;

  let message = error.message ?? "Internal server error";
  let errorDetails = error;

  res.status(statuscode).send({
    message: message,
    error: errorDetails,
  });
};

export default globalErrorHnadler;
