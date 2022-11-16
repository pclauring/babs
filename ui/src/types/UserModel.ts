import { MonsterModel } from "./MonsterModel";

export interface UserModel {
  id: number;
  email: String;
  name: String;
  monsters: MonsterModel[];
}
