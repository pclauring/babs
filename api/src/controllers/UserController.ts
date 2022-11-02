import { Request, Response } from "express";
import { UserRepository as UserRepository } from "../repositories/UserRepository";

const repository = new UserRepository();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await repository.getUsers();
    res.status(200).send({
      data: users,
    });
  } catch (error) {
    res.status(404).send(`Unable to find any existing users`);
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const user = await repository.createUser(req.body);

    user
      ? res.status(201).send(user)
      : res.status(500).send("Failed to create a new user.");
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const user = await repository.findUserById(parseInt(id));

    if (user) {
      res.status(200).send(user);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
};

export const getUserByQueryParams = async (req: Request, res: Response) => {
  try {
    const users = await repository.findUserByQuery(req.query);

    if (users) {
      res.status(200).send(users);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
};

export const putUser = async (req: Request, res: Response) => {
  const id = req?.params?.id;
  let user = { ...req.body, id: parseInt(id) };
  try {
    user = await repository.updateUser(user);
    user
      ? res.status(200).send(user)
      : res.status(304).send(`User with id: ${id} not updated`);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const user = await repository.deleteUser(parseInt(id));
    user
      ? res.status(202).send(user)
      : res.status(400).send(`User with id ${id} does not exist`);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};
