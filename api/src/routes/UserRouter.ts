import express from "express";
import { createMonster } from "../controllers/MonsterController";
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
userRouter.post("/:id/monsters/new", createMonster);
