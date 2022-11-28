import express from "express";

import {
  postMonster,
  getAllMonsters,
  putMonster,
  getMonsterById,
  deleteMonsterById,
  getMonsterByQueryParams,
  createMonster,
} from "../controllers/MonsterController";
export const monsterRouter = express.Router();

monsterRouter.post("/", postMonster);
monsterRouter.get("/all", getAllMonsters);
monsterRouter.put("/:id", putMonster);
monsterRouter.get("/:id", getMonsterById);
monsterRouter.get("/", getMonsterByQueryParams);
monsterRouter.delete("/:id", deleteMonsterById);
