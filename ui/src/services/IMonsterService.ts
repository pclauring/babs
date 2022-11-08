import { AxiosResponse } from "axios";
import { MonsterModel } from "../types/MonsterModel";
import { ServiceResponse } from "../types/ServiceResponse";
export interface IMonsterService {
  getAllMonsters(): Promise<AxiosResponse<ServiceResponse<MonsterModel[]>>>;
  getMonstersForUser(
    userId: number,
  ): Promise<AxiosResponse<ServiceResponse<MonsterModel[]>>>;
  createMonster(
    monster: MonsterModel,
  ): Promise<AxiosResponse<ServiceResponse<MonsterModel>>>;
  deleteMonster(
    _id: number,
  ): Promise<AxiosResponse<ServiceResponse<MonsterModel>>>;
}
