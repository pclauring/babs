import express from "express";

import {
  postEvent,
  getAllEvents,
  putEvent,
  getEventById,
  deleteEventById,
  getEventByQueryParams,
} from "../controllers/EventController";
export const eventRouter = express.Router();

eventRouter.post("/", postEvent);
eventRouter.get("/all", getAllEvents);
eventRouter.put("/:id", putEvent);
eventRouter.get("/:id", getEventById);
eventRouter.get("/", getEventByQueryParams);
eventRouter.delete("/:id", deleteEventById);
