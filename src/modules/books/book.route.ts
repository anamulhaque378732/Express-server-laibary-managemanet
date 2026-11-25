import { Router } from "express";
import { bookController } from "./book.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const bookRouter = Router();

const {
  createBook,
  getBooksController,
  getBookController,
  updateBookController,
  deleteBookController,
} = bookController;

const { verifyToken, authorizedRoles } = authMiddleware;
bookRouter.post("/", createBook);

bookRouter.get(
  "/",
  verifyToken,
  authorizedRoles("admin", "member"),
  getBooksController,
);

bookRouter.get("/:id", getBookController);

bookRouter.delete("/:id", deleteBookController);

bookRouter.patch("/:id", updateBookController);

export default bookRouter;
