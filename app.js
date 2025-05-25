import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  if (PORT == 5500) {
    res.send("Welcome to Subscribily Development!");
  } else {
    res.send("Welcome to Subscribily!");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

export default app;
