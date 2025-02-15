import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";

import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter
  .route("/")
  .get(authorize, getUsers)
  .post((req, res) => {
    res.send({ title: "CREATE user" });
  });

userRouter
  .route("/:id")
  .get(authorize, getUser)
  .put((req, res) => {
    res.send({ title: `UPDATE user` });
  })
  .delete((req, res) => {
    res.send({ title: `DELETE user` });
  });

export default userRouter;
