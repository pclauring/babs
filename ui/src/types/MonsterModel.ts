import { EventModel } from "./EventModel";

export interface MonsterModel {
  id: number;
  name: string;
  sprite: string | null;
  ownerId: number | null;
  level: number | null;
  health: number | null;
  maxHealth: number | null;
  energy: number | null;
  maxEnergy: number | null;
  offense: number | null;
  defense: number | null;
  mood: String | null;
  type: String | null;
  events: EventModel[];
}
