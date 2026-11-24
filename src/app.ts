import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

app.use(cors({ origin: "http://localhost:5000" }));

app.use(express.text());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

export default app;
