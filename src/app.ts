import express, { Application } from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.route";
import bookRouter from "./modules/books/book.route";
import globalErrorHnadler from "./middleware/globalErrorHandlet";
import { resolve } from "dns";
const app: Application = express();

app.use(cors({ origin: "http://localhost:5000" }));

app.use(express.text());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

app.use("/api/books", bookRouter);

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.use((req, res, next) => {
  const error = new Error(`Not found this route ${req.originalUrl}`);
  error.statusCode = 404;

  next(error);
});

app.use(globalErrorHnadler);

export default app;
