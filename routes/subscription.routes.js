import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";

import {
  createSubscription,
  getSubscriptions,
  getSubscriptionByUser,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter
  .route("/")
  .get(authorize, getSubscriptions)
  .post(authorize, createSubscription);

subscriptionRouter
  .route("/:id")
  .get(authorize, getSubscriptionByUser)
  .put((req, res) => {
    res.send({ title: "UPDATE subscription" });
  })
  .delete((req, res) => {
    res.send({ title: "DELETE subscription" });
  });

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET all subscriptions for a user" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscriptions" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;
