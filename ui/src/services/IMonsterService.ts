import { AxiosResponse } from "axios";
import { MonsterModel } from "../types/MonsterModel";
import { ServiceResponse } from "../types/ServiceResponse";
export interface IMonsterService {
  getAllMonsters(): Promise<AxiosResponse<ServiceResponse<MonsterModel[]>>>;
  //   getMonstersForUser(userId: string): Promise<AxiosResponse<IMonster[]>>;
  //   createMonster(monster: IMonster): Promise<AxiosResponse<IMonster>>;
  //   deleteMonster(_id: string): Promise<AxiosResponse<IMonster>>;
  //   addTraining(monster: IMonster): Promise<AxiosResponse<IMonster>>;
}
