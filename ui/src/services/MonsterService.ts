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

  //   getMonstersForUser(userId: string): Promise<AxiosResponse<IMonster[]>> {
  //     return this._axiosClient.get<IMonster[]>(`?ownerId=${userId}`);
  //   }

  //   public createMonster(monster: IMonster): Promise<AxiosResponse<IMonster>> {
  //     return this._axiosClient.post<IMonster>("", {
  //       data: monster,
  //     });
  //   }

  //   public deleteMonster(_id: string): Promise<AxiosResponse<IMonster>> {
  //     return this._axiosClient.delete<IMonster>(`${_id}`);
  //   }

  //   public addTraining(monster: IMonster): Promise<AxiosResponse<IMonster>> {
  //     const monsterToUpdate: Pick<IMonster, "events"> = {
  //       events: monster.events
  //         ? monster.events.concat([{ type: "Training" }])
  //         : [{ type: "Hatch" }],
  //     };
  //     return this._axiosClient.put<IMonster>(`${monster._id}`, {
  //       data: monsterToUpdate,
  //     });
  //   }
}
