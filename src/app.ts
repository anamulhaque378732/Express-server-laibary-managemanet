import express, { Application } from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.route";
import bookRouter from "./modules/books/book.route";
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

export default app;
