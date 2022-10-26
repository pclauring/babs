import express, { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { postMonster, getAllMonsters } from "../controllers/monster.controller";
export const monsterRouter = express.Router();

monsterRouter.post("/", postMonster);

monsterRouter.get("/all", getAllMonsters);
