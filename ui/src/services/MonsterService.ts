import { IMonsterService } from "./IMonsterService";
import { AxiosResponse } from "axios";
import AxiosClient from "../tools/AxiosClient";
import { MonsterModel } from "../types/MonsterModel";
import { ServiceResponse } from "../types/ServiceResponse";

export class MonsterService implements IMonsterService {
  private readonly _axiosClient: AxiosClient;

  constructor(baseUrl: string | undefined, tokenAudience: string | undefined) {
    this._axiosClient = new AxiosClient([baseUrl, "/monsters/"], tokenAudience);
  }

  public getAllMonsters(): Promise<
    AxiosResponse<ServiceResponse<MonsterModel[]>>
  > {
    return this._axiosClient.get<ServiceResponse<MonsterModel[]>>("all");
  }

  getMonstersForUser(
    userId: number,
  ): Promise<AxiosResponse<ServiceResponse<MonsterModel[]>>> {
    return this._axiosClient.get<ServiceResponse<MonsterModel[]>>(
      `?ownerId=${userId}`,
    );
  }

  getMonsterById(id: number): Promise<AxiosResponse<MonsterModel>> {
    return this._axiosClient.get<MonsterModel>(`/${id}`);
  }

  public createMonster(
    monster: MonsterModel,
  ): Promise<AxiosResponse<ServiceResponse<MonsterModel>>> {
    return this._axiosClient.post<ServiceResponse<MonsterModel>>("", {
      data: monster,
    });
  }

  public deleteMonster(
    _id: number,
  ): Promise<AxiosResponse<ServiceResponse<MonsterModel>>> {
    return this._axiosClient.delete<ServiceResponse<MonsterModel>>(`${_id}`);
  }
}
