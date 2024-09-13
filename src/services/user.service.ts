import prisma from '../prisma';
import { CreateUserDto, updateUserDto } from '../dto/user.dto.js';

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const createNewUser = async (user: CreateUserDto) => {
  const existEmail = await prisma.user.findUnique({
    where: { email: user.email },
  });
  if (!existEmail) {
    return await prisma.user.create({
      data: user,
    });
  }
  //   if (existEmail) {
  //     return res.status(400).json({ message: 'Email already exists' });
  //   }

  //   return await prisma.user.create({
  //     data: user,
  //   });
};

const updatedUserId = async ({
  data,
  id,
}: {
  data: updateUserDto;
  id: number;
}) => {
  return await prisma.user.update({
    data,
    where: {
      id,
    },
  });
};

const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
};
export { getAllUsers, deleteUser, createNewUser, updatedUserId };
