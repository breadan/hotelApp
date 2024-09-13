import { Router } from 'express';
import {
  deleteUserId,
  getUsers,
  createUser,
  updateUser,
} from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.delete('/:id', deleteUserId);

userRouter.put('/:id', updateUser);

userRouter.post('/', createUser);

export default userRouter;
