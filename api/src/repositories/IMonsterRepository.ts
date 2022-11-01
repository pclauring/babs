import { Monster } from "@prisma/client";
import { ParsedQs } from "qs";

export interface IMonsterPayload {
  id: number;
  name: string;
  sprite: string | null;
  ownerId: number | null;
}

export interface IMonsterRepository {
  getMonsters(): Promise<Monster[]>;
  findMonsterById(id: number): Promise<Monster | null>;
  findMonsterByQuery(query: ParsedQs): Promise<Monster[]>;
  createMonster(name: string): Promise<Monster>;
  updateMonster(monster: IMonsterPayload): Promise<Monster>;
  deleteMonster(id: number): Promise<Monster>;
}
