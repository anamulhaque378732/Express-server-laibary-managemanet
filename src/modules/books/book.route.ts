import { Router } from "express";
import { bookController } from "./book.controller";

const bookRouter = Router();
const { createBook, getBooksController } = bookController;

bookRouter.post("/", createBook);
bookRouter.get("/", getBooksController);
export default bookRouter;
