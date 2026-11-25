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

const getBooksService = async (search: string) => {
  let sql = ` SELECT * FROM books`;
  let params: any = [];
  if (search) {
    sql = ` SELECT * FROM books WHERE title ILIKE $1 OR description ILIKE $1`;
    params = [`%${search}%`];
  }
  const result = await pool.query(sql, params);

  return result.rows;
};

const getBookService = async (id: string) => {
  const result = await pool.query(
    `
  SELECT * FROM books WHERE id=$1 
  `,
    [id],
  );

  return result.rows[0];
};

const updateBookService = async (id: string, payload: Partial<IBook>) => {
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
    UPDATE books
             SET title = COALESCE($1, title),
             author = COALESCE($2, author),
             description = COALESCE($3, description),
             isbn = COALESCE($4, isbn),
             category = COALESCE($5, category),
             total_copies = COALESCE($6, total_copies),
             available_copies = COALESCE($7, available_copies)
             WHERE id =$8 RETURNING *
    `,
    [
      title ?? null,
      author ?? null,
      description ?? null,
      isbn ?? null,
      category ?? null,
      total_copies ?? null,
      available_copies ?? null,
      id,
    ],
  );

  return result.rows[0];
};

const deleteBookService = async (id: string) => {
  const result = await pool.query(
    `
         DELETE FROM books WHERE id =$1 
`,
    [id],
  );

  return result.rows;
};

export const bookService = {
  createBookService,
  getBooksService,
  getBookService,
  updateBookService,
  deleteBookService,
};
