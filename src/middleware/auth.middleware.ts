import { RequestHandler, Request, Response, NextFunction } from "express";
import { jwtHelpers } from "../utils/jwtHelpers";
import { JwtPayload } from "jsonwebtoken";

const verifyToken: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("Access denaid");
  }

  try {
    const decode = jwtHelpers.verifyToken(authHeader);
    req.user = decode as JwtPayload;
    next();
  } catch {
    const error = new Error("Invalid or expaired Token");

    error.statusCode = 403;

    throw error;
  }
};

const authorizedRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new Error("Forbidden You dont.t have access");
    }
    next();
  };
};

export const authMiddleware = {
  verifyToken,
  authorizedRoles,
};
