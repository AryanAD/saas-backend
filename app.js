import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the SAAS server!");
});

app.listen(3000, () => {
  console.log("SAAS Server is live on http://localhost:3000");
});

export default app;
