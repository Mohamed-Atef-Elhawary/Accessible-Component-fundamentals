import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userList = signal<User[]>([
    {
      name: 'Mohamed Elhawary',
      initial: 'ME',
      email: 'mohamed@devmail.com',
      role: 'Lead Developer',
      id: '1',
    },
    {
      name: 'Sarah Ahmed',
      initial: 'SA',
      email: 'sarah@designhub.com',
      role: 'UI/UX Designer',
      id: '2',
    },
    {
      name: 'Omar Ali',
      initial: 'OA',
      email: 'omar@frontendhub.com',
      role: 'UI/UX Designer',
      id: '3',
    },
    {
      name: 'Laila Hassan',
      initial: 'LH',
      email: 'laila@stacknet.com',
      role: 'Backend Developer',
      id: '4',
    },
    {
      name: 'Youssef Nabil',
      initial: 'YN',
      email: 'youssef@testlab.com',
      role: 'DevOps Engineer',
      id: '5',
    },
  ]);

  users = computed<User[]>(() => this.userList());

  editUser(userData: User) {
    this.userList.update((users) => {
      return users.map((user) => {
        let updatedUser: User = { ...user };
        if (user.id === userData.id) {
          updatedUser = { ...userData };
        }
        return updatedUser;
      });
    });
  }
  deleteUser(userId: string) {
    this.userList.update((users) => users.filter((user) => user.id !== userId));
  }
}
