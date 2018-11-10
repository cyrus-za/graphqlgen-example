export interface IUserService {
  findOne: (id: string) => User | undefined;
  create: (firstName?: string, lastName?: string) => User;
}

export interface Context {
  User: IUserService;
}

export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
}
