import { AxiosResponse } from "axios";
import { UserModel } from "../types/UserModel";
export interface IUserService {
  getUsersByEmail(email: string): Promise<AxiosResponse<UserModel[]>>;
  createUser(user: UserModel): Promise<AxiosResponse<UserModel>>;
}
