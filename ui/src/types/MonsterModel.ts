import { EventModel } from "./EventModel";

export interface MonsterModel {
  id: number;
  name: string;
  sprite: string | null;
  ownerId: number | null;
  events: EventModel[];
}
