import { RequestHandler } from "express";
import { authService } from "./auth.service";

const { registerUser, loginUser } = authService;

const registerController: RequestHandler = async (req, res, next) => {
  try {
    const result = await registerUser(req.body);
    res.status(200).json({
      success: true,
      message: "User Created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

const loginController: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    res.status(200).json({
      success: true,
      message: "User Login successfully",
      data: { user, token },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const authController = {
  registerController,
  loginController,
};
