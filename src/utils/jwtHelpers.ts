import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const genarateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, config.JWTAccessToken as string, {
    expiresIn: "1d",
  });
};

const verifyToken = (token: string) => {
  return jwt.verify(token, config.JWTAccessToken as string);
};

export const jwtHelpers = {
  genarateToken,
  verifyToken,
};
