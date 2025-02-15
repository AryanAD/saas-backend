import express from "express";
import { PORT as envPORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the SAAS server!");
});

const PORT = envPORT || 3300;
app.listen(PORT, () => {
  console.log(`SAAS Server is live on http://localhost:${PORT}`);
});

export default app;
