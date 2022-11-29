import { Request, Response } from "express";
import { MonsterRepository as MonsterRepository } from "../repositories/MonsterRepository";
import { Adjectives } from "../resources/AdjectiveList";
import { Animals } from "../resources/AnimalList";

const repository = new MonsterRepository();

export const getAllMonsters = async (req: Request, res: Response) => {
  try {
    const monsters = await repository.getMonsters();
    res.status(200).send({
      data: monsters,
    });
  } catch (error) {
    res.status(404).send(`Unable to find any existing monsters`);
  }
};

export const createMonster = async (req: Request, res: Response) => {
  try {
    const ownerId = parseInt(req?.params?.id);
    const animal = Animals[Math.floor(Math.random() * Animals.length)];
    const descriptor =
      Adjectives[Math.floor(Math.random() * Adjectives.length)];
    const health = Math.floor(Math.random() * 5) + 5;
    const energy = Math.floor(Math.random() * 5) + 5;
    const offense = Math.floor(Math.random() * 7) + 3;
    const defense = Math.floor(Math.random() * 7) + 3;
    const monsterBody = {
      name: animal,
      sprite: `${animal}.png`,
      ownerId: ownerId,
      level: 0,
      maxHealth: health,
      health: health,
      energy: energy,
      maxEnergy: energy,
      offense: offense,
      defense: defense,
      mood: descriptor,
      type: animal,
    };

    const monster = await repository.createMonster(monsterBody);
    monster
      ? res.status(201).send(monster)
      : res.status(500).send("Failed to create a new monster.");
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: (error as Error).message });
  }
};

export const postMonster = async (req: Request, res: Response) => {
  try {
    const monster = await repository.createMonster(req.body);

    monster
      ? res.status(201).send(monster)
      : res.status(500).send("Failed to create a new monster.");
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: (error as Error).message });
  }
};

export const getMonsterById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const monster = await repository.findMonsterById(parseInt(id));

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
    const monsters = await repository.findMonsterByQuery(req.query);

    if (monsters) {
      res.status(200).send(monsters);
    }
  } catch (error) {
    let query: string = "";
    for (var propName in req.query) {
      if (req.query.hasOwnProperty(propName)) {
        query += propName + " = " + req.query[propName];
      }
    }
    res
      .status(404)
      .send(`Unable to find matching record with properties: ${query}`);
  }
};

export const putMonster = async (req: Request, res: Response) => {
  const id = req?.params?.id;
  let monster = { ...req.body, id: parseInt(id) };
  try {
    monster = await repository.updateMonster(monster);
    monster
      ? res.status(200).send(monster)
      : res.status(304).send(`Monster with id: ${id} not updated`);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};

export const deleteMonsterById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const monster = await repository.deleteMonster(parseInt(id));
    monster
      ? res.status(202).send(monster)
      : res.status(400).send(`Monster with id ${id} does not exist`);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};
