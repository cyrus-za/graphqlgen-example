import { IUserService, User } from '../types';

const mockUsers: User[] = [
  {
    id: '1',
    firstName: 'Mock',
    lastName: 'User'
  }
];

export class UserService implements IUserService {
  findOne(id: string) {
    return mockUsers.find(u => u.id === id);
  }

  create(firstName?: string, lastName?: string) {
    const user = {
      firstName,
      lastName,
      id: '' + Number(mockUsers[mockUsers.length - 1].id) + 1
    };
    mockUsers.push(user);

    return user;
  }
}