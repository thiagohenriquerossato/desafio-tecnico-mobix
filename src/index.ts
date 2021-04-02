import express from "express";
import mongoose from "mongoose";

import { bookRoutes } from "./routes/books.routes";
import { charactersRoutes } from "./routes/characters.routes";

const app = express();

app.use(express.json());

app.use("/characters", charactersRoutes);
app.use("/books", bookRoutes);
mongoose.connect(
  "mongodb://localhost:27017/game-og-thrones",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: false },
  () => console.log("connected to  DB")
);

export { app };
