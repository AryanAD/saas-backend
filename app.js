import express from "express";
import cookieParser from "cookie-parser";

import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

import { PORT as envPORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import workflowRouter from "./routes/workflow.routes.js";

import connectToDatabase from "./database/mongodb.js";

const app = express();

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

// Custom Middleware
app.use(errorMiddleware);
app.use(arcjetMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the SAAS server!");
});

const PORT = envPORT || 3300;
app.listen(PORT, async () => {
  console.log(`SAAS Server is live on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
