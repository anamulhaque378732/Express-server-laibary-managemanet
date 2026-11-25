import { RequestHandler } from "express";
import { bookService } from "./book.service";

const {
  createBookService,
  getBooksService,
  getBookService,
  updateBookService,
  deleteBookService,
} = bookService;

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
    const result = await getBooksService(req.query.search as string);
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

const getBookController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await getBookService(id as string);

    res.status(200).json({
      success: true,
      message: "Book Ritrived successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

const updateBookController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await updateBookService(id as string, req.body);

    res.status(200).json({
      success: true,
      message: "Updated book successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
const deleteBookController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteBookService(id as string);

    res.status(200).json({
      success: true,
      message: "Book Deleted successfully",
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
  getBookController,
  updateBookController,
  deleteBookController,
};
