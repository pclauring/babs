import { Monster, PrismaClient } from "@prisma/client";
import { ParsedQs } from "qs";
import { IMonsterPayload, IMonsterRepository } from "./IMonsterRepository";

export class MonsterRepository implements IMonsterRepository {
  private readonly _prismaClient: PrismaClient;

  constructor() {
    this._prismaClient = new PrismaClient();
  }

  public getMonsters(): Promise<Monster[]> {
    return this._prismaClient.monster.findMany();
  }

  public findMonsterById(id: number): Promise<Monster | null> {
    return this._prismaClient.monster.findUnique({
      where: {
        id: id,
      },
    });
  }

  public findMonsterByQuery(query: ParsedQs): Promise<Monster[]> {
    return this._prismaClient.monster.findMany({
      where: {
        ...query,
      },
    });
  }
  public createMonster(name: string): Promise<Monster> {
    return this._prismaClient.monster.create({
      data: {
        name: name,
      },
    });
  }

  public updateMonster(monster: IMonsterPayload): Promise<Monster> {
    return this._prismaClient.monster.update({
      where: {
        id: monster.id,
      },
      data: {
        name: monster.name,
        sprite: monster.sprite,
        ownerId: monster.ownerId,
      },
    });
  }

  public deleteMonster(id: number): Promise<Monster> {
    return this._prismaClient.monster.delete({
      where: {
        id: id,
      },
    });
  }
}
