import { Response, Request } from 'express';
import {
  getAllUsers,
  deleteUser,
  createNewUser,
  updatedUserId,
} from '../services/user.service';
import prisma from '../prisma';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, isAdmin } = req.body;
    const newUser = await createNewUser({ name, email, isAdmin });

    res.status(201).json(newUser);
  } catch (error) {
    error: 'failed to Create user';
    console.log(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    // get users from user service
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Fail' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, isAdmin } = req.body;
    const updateUserId = await updatedUserId({
      id: +id,
      data: { name, isAdmin },
    });
    res.status(201).json(updateUserId);
  } catch (error) {
    error: 'failed to update user';
    console.log(error);
  }
};

export const deleteUserId = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await deleteUser(+id); //to convert to number
    res.status(200).json({ msg: 'deleted successfully' });
  } catch (error) {
    error: 'failed to delete user';
  }
};
