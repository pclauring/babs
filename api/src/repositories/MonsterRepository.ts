import { Monster, PrismaClient } from "@prisma/client";
import { ParsedQs } from "qs";
import { IMonsterPayload, IMonsterRepository } from "./IMonsterRepository";

export class MonsterRepository implements IMonsterRepository {
  private readonly _prismaClient: PrismaClient;

  constructor() {
    this._prismaClient = new PrismaClient();
  }

  public getMonsters(): Promise<Monster[]> {
    return this._prismaClient.monster.findMany({
      include: {
        events: true,
      },
    });
  }

  public findMonsterById(id: number): Promise<Monster | null> {
    return this._prismaClient.monster.findUnique({
      where: {
        id: id,
      },
      include: {
        events: true,
      },
    });
  }

  public findMonsterByQuery(query: ParsedQs): Promise<Monster[]> {
    return this._prismaClient.monster.findMany({
      where: {
        ...query,
      },
      include: {
        events: true,
      },
    });
  }
  public createMonster(monster: IMonsterPayload): Promise<Monster> {
    return this._prismaClient.monster.create({
      data: {
        ...monster,
      },
    });
  }

  public updateMonster(monster: IMonsterPayload): Promise<Monster> {
    return this._prismaClient.monster.update({
      where: {
        id: monster.id,
      },
      data: {
        ...monster,
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
