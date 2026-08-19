import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';
import { EditableUserFields } from '../../types/generalTypes';

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

  editUser(userId: string, userData: EditableUserFields) {
    const initial: string = this.buildInitial(userData.name);
    this.userList.update((users) => {
      return users.map((user) => {
        let updatedUser: User = { ...user };
        if (user.id === userId) {
          updatedUser = { ...user, initial, ...userData };
        }
        return updatedUser;
      });
    });
  }
  deleteUser(userId: string) {
    this.userList.update((users) => users.filter((user) => user.id !== userId));
  }

  buildInitial(userName: string): string {
    const nameArr = userName.split(' ', 2);
    try {
      return `${nameArr[0][0]}${nameArr[1][0]}`.toUpperCase();
    } catch (error) {
      return `${nameArr[0][0]}${nameArr[0][1]}`.toUpperCase();
    }
  }
}
