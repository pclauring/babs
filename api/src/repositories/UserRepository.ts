import { User, PrismaClient } from "@prisma/client";
import { ParsedQs } from "qs";
import { IUserPayload, IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  private readonly _prismaClient: PrismaClient;

  constructor() {
    this._prismaClient = new PrismaClient();
  }

  public getUsers(): Promise<User[]> {
    return this._prismaClient.user.findMany();
  }

  public findUserById(id: number): Promise<User | null> {
    return this._prismaClient.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  public findUserByQuery(query: ParsedQs): Promise<User[]> {
    return this._prismaClient.user.findMany({
      where: {
        ...query,
      },
    });
  }
  public createUser(name: string, email: string): Promise<User> {
    return this._prismaClient.user.create({
      data: {
        name: name,
        email: email,
      },
    });
  }

  public updateUser(user: IUserPayload): Promise<User> {
    return this._prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: user.name,
        email: user.email,
      },
    });
  }

  public deleteUser(id: number): Promise<User> {
    return this._prismaClient.user.delete({
      where: {
        id: id,
      },
    });
  }
}
