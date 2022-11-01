import { Request, Response } from "express";
import {
  createMonster,
  getMonsters,
  deleteMonster,
  updateMonster,
  findMonsterById,
  findMonsterByQuery,
} from "../repositories/MonsterRepository";

export const getAllMonsters = async (req: Request, res: Response) => {
  try {
    const monsters = await getMonsters();
    res.status(200).send({
      data: monsters,
    });
  } catch (error) {
    res.status(404).send(`Unable to find any existing monsters`);
  }
};

export const postMonster = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const monster = await createMonster(name);

    monster
      ? res.status(201).send(monster)
      : res.status(500).send("Failed to create a new monster.");
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: error });
  }
};

export const getMonsterById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const monster = await findMonsterById(parseInt(id));

    if (monster) {
      res.status(200).send(monster);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
};

export const getMonsterByQueryParams = async (req: Request, res: Response) => {
  try {
    const monsters = await findMonsterByQuery(req.query);

    if (monsters) {
      res.status(200).send(monsters);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
};

export const putMonster = async (req: Request, res: Response) => {
  const id = req?.params?.id;
  let monster = { ...req.body, id: parseInt(id) };
  try {
    monster = await updateMonster(monster);
    monster
      ? res.status(200).send(monster)
      : res.status(304).send(`Monster with id: ${id} not updated`);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

export const deleteMonsterById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const monster = await deleteMonster(parseInt(id));
    monster
      ? res.status(202).send(monster)
      : res.status(400).send(`Monster with id ${id} does not exist`);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
