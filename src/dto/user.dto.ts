export interface CreateUserDto {
  name: string;
  email: string;
  isAdmin: boolean;
}

export type updateUserDto = Partial<CreateUserDto>;
