import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const genarateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, config.JWTAccessToken as string, {
    expiresIn: "3h",
  });
};

const verifyToken = (payload: JwtPayload) => {
  return jwt.sign(payload, config.JWTRefreshToken as string, {
    expiresIn: "1d",
  });
};

export const jwtHelpers = {
  genarateToken,
  verifyToken,
};
