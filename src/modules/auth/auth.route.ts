import { Router } from "express";
import { authController } from "./auth.controller";

const authRouter = Router();

const { registerController, loginController } = authController;

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
export default authRouter;
