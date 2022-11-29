import { IUserService } from "./IUserService";
import { AxiosResponse } from "axios";
import AxiosClient from "../tools/AxiosClient";
import { UserModel } from "../types/UserModel";

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

  public createUser(user: UserModel): Promise<AxiosResponse<UserModel>> {
    return this._axiosClient.post<UserModel>("", {
      data: user,
    });
  }
}
