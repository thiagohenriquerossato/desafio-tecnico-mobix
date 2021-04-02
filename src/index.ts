import express from "express";
import mongoose from "mongoose";

import { bookRoutes } from "./routes/books.routes";
import { charactersRoutes } from "./routes/characters.routes";

const app = express();

app.use(express.json());

app.use("/characters", charactersRoutes);
app.use("/books", bookRoutes);
mongoose.connect(
  "mongodb+srv://12345:12345@cluster0.ixyik.mongodb.net/game-of-thrones",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: false },
  () => console.log("connected to  DB")
);

export { app };
