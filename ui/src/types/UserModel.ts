import { MonsterModel } from "./MonsterModel";

export interface UserModel {
  id: number;
  email: string;
  name: string;
  monsters: MonsterModel[];
}
