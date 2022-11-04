import { Request, Response } from "express";
import { EventRepository as EventRepository } from "../repositories/EventRepository";

const repository = new EventRepository();

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await repository.getEvents();
    res.status(200).send({
      data: events,
    });
  } catch (error) {
    res.status(404).send(`Unable to find any existing events`);
  }
};

export const postEvent = async (req: Request, res: Response) => {
  try {
    const event = await repository.createEvent(req.body);

    event
      ? res.status(201).send(event)
      : res.status(500).send("Failed to create a new event.");
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: (error as Error).message });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const event = await repository.findEventById(parseInt(id));

    if (event) {
      res.status(200).send(event);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
};

export const getEventByQueryParams = async (req: Request, res: Response) => {
  try {
    const events = await repository.findEventByQuery(req.query);

    if (events) {
      res.status(200).send(events);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
};

export const putEvent = async (req: Request, res: Response) => {
  const id = req?.params?.id;
  let event = { ...req.body, id: parseInt(id) };
  try {
    event = await repository.updateEvent(event);
    event
      ? res.status(200).send(event)
      : res.status(304).send(`Event with id: ${id} not updated`);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};

export const deleteEventById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const event = await repository.deleteEvent(parseInt(id));
    event
      ? res.status(202).send(event)
      : res.status(400).send(`Event with id ${id} does not exist`);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};
