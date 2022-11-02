import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  getUserByQueryParams,
  postUser,
  putUser,
} from "../controllers/UserController";
export const userRouter = express.Router();

userRouter.post("/", postUser);
userRouter.get("/all", getAllUsers);
userRouter.put("/:id", putUser);
userRouter.get("/:id", getUserById);
userRouter.get("/", getUserByQueryParams);
userRouter.delete("/:id", deleteUserById);
