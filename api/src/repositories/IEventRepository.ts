import { Event } from "@prisma/client";
import { ParsedQs } from "qs";

export interface IEventPayload {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  monsterId: number | null;
}

export interface IEventRepository {
  getEvents(): Promise<Event[]>;
  findEventById(id: number): Promise<Event | null>;
  findEventByQuery(query: ParsedQs): Promise<Event[]>;
  createEvent(Event: IEventPayload): Promise<Event>;
  updateEvent(Event: IEventPayload): Promise<Event>;
  deleteEvent(id: number): Promise<Event>;
}
