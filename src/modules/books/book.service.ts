import { pool } from "../../config/db";
import { IBook } from "./book.interface";

const createBookService = async (payload: IBook) => {
  const {
    title,
    author,
    description,
    isbn,
    category,
    total_copies,
    available_copies,
  } = payload;

  const result = await pool.query(
    `
    INSERT INTO books(title, author, description, isbn,category, total_copies, available_copies) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *
    
    `,
    [
      title,
      author,
      description,
      isbn,
      category,
      total_copies,
      available_copies,
    ],
  );

  return result.rows[0];
};

const getBooksService = async () => {
  const result = await pool.query(` SELECT * FROM books`);

  return result.rows;
};

export const bookService = { createBookService, getBooksService };
