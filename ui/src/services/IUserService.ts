import { AxiosResponse } from "axios";
import { MonsterModel } from "../types/MonsterModel";
import { UserModel } from "../types/UserModel";
export interface IUserService {
  getUsersByEmail(email: string): Promise<AxiosResponse<UserModel[]>>;
  createUser(user: UserModel): Promise<AxiosResponse<UserModel>>;
  createMonsterForUser(id: number): Promise<AxiosResponse<MonsterModel>>;
}
