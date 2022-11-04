import { Event, PrismaClient } from "@prisma/client";
import { ParsedQs } from "qs";
import { IEventPayload, IEventRepository } from "./IEventRepository";

export class EventRepository implements IEventRepository {
  private readonly _prismaClient: PrismaClient;

  constructor() {
    this._prismaClient = new PrismaClient();
  }

  public getEvents(): Promise<Event[]> {
    return this._prismaClient.event.findMany();
  }

  public findEventById(id: number): Promise<Event | null> {
    return this._prismaClient.event.findUnique({
      where: {
        id: id,
      },
    });
  }

  public findEventByQuery(query: ParsedQs): Promise<Event[]> {
    return this._prismaClient.event.findMany({
      where: {
        ...query,
      },
    });
  }
  public createEvent(event: IEventPayload): Promise<Event> {
    return this._prismaClient.event.create({
      data: {
        ...event,
      },
    });
  }

  public updateEvent(event: IEventPayload): Promise<Event> {
    return this._prismaClient.event.update({
      where: {
        id: event.id,
      },
      data: {
        ...event,
      },
    });
  }

  public deleteEvent(id: number): Promise<Event> {
    return this._prismaClient.event.delete({
      where: {
        id: id,
      },
    });
  }
}
