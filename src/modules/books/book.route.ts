import { Router } from "express";
import { bookController } from "./book.controller";

const bookRouter = Router();

const {
  createBook,
  getBooksController,
  getBookController,
  updateBookController,
  deleteBookController,
} = bookController;

bookRouter.post("/", createBook);

bookRouter.get("/", getBooksController);

bookRouter.get("/:id", getBookController);

bookRouter.delete("/:id", deleteBookController);

bookRouter.patch("/:id", updateBookController);

export default bookRouter;
