import { User } from "@prisma/client";
import { ParsedQs } from "qs";

export interface IUserPayload {
  id: number;
  email: string;
  name: string | null;
}

export interface IUserRepository {
  getUsers(): Promise<User[]>;
  findUserById(id: number): Promise<User | null>;
  findUserByQuery(query: ParsedQs): Promise<User[]>;
  createUser(name: string, email: string): Promise<User>;
  updateUser(user: IUserPayload): Promise<User>;
  deleteUser(id: number): Promise<User>;
}
