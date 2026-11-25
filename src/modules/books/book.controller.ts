import { RequestHandler } from "express";
import { bookService } from "./book.service";

const { createBookService, getBooksService } = bookService;

const createBook: RequestHandler = async (req, res) => {
  try {
    const result = await createBookService(req.body);
    res.status(200).json({
      success: true,
      message: "Book Created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

const getBooksController: RequestHandler = async (req, res) => {
  try {
    const result = await getBooksService();
    res.status(200).json({
      success: true,
      message: "Book  Retrived successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const bookController = {
  createBook,
  getBooksController,
};
