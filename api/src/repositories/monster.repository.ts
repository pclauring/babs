import { Monster, PrismaClient } from "@prisma/client";
import { ParsedQs } from "qs";
const prisma = new PrismaClient();

export interface IMonsterPayload {
  id: number;
  name: string;
  sprite: string | null;
  ownerId: number | null;
}

export const getMonsters = async (): Promise<Monster[]> => {
  return prisma.monster.findMany();
};

export const findMonsterById = async (id: number): Promise<Monster | null> => {
  return prisma.monster.findUnique({
    where: {
      id: id,
    },
  });
};

export const findMonsterByQuery = async (
  query: ParsedQs
): Promise<Monster[]> => {
  return prisma.monster.findMany({
    where: {
      ...query,
    },
  });
};

export const createMonster = async (name: string): Promise<Monster> => {
  return prisma.monster.create({
    data: {
      name: name,
    },
  });
};

export const updateMonster = async (monster: IMonsterPayload) => {
  return prisma.monster.update({
    where: {
      id: monster.id,
    },
    data: {
      name: monster.name,
      sprite: monster.sprite,
      ownerId: monster.ownerId,
    },
  });
};

export const deleteMonster = async (id: number) => {
  return prisma.monster.delete({
    where: {
      id: id,
    },
  });
};
