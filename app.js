import express from "express";

import { PORT as envPORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the SAAS server!");
});

const PORT = envPORT || 3300;
app.listen(PORT, () => {
  console.log(`SAAS Server is live on http://localhost:${PORT}`);
});

export default app;
