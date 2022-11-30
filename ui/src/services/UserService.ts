import { IUserService } from "./IUserService";
import { AxiosResponse } from "axios";
import AxiosClient from "../tools/AxiosClient";
import { UserModel } from "../types/UserModel";
import { MonsterModel } from "../types/MonsterModel";

export class UserService implements IUserService {
  private readonly _axiosClient: AxiosClient;

  constructor(baseUrl: string | undefined, tokenAudience: string | undefined) {
    this._axiosClient = new AxiosClient([baseUrl, "/users"], tokenAudience);
  }
  getUsersByEmail(email: string): Promise<AxiosResponse<UserModel[]>> {
    return this._axiosClient.get<UserModel[]>(``, {
      params: { email: email },
    });
  }

  createUser(user: UserModel): Promise<AxiosResponse<UserModel>> {
    return this._axiosClient.post<UserModel>("", {
      data: user,
    });
  }

  createMonsterForUser(id: number): Promise<AxiosResponse<MonsterModel>> {
    return this._axiosClient.post<MonsterModel>(`/${id}/monsters/new`, {});
  }
}
