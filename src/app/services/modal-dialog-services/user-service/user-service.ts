import { Injectable, signal } from '@angular/core';
import { User } from '../../../interfaces/user';
import { EditableUserFields } from '../../../types/generalTypes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _userList = signal<User[]>([
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
    {
      name: 'Nourhan Adel',
      initial: 'NA',
      email: 'Nourhan@testlab.com',
      role: 'Frontend Developer',
      id: '6',
    },
    {
      name: 'Ahmed Tarek',
      initial: 'AT',
      email: 'Ahmed@testlab.com',
      role: 'Frontend Developer',
      id: '7',
    },
    {
      name: 'Heba Mohamed',
      initial: 'HM',
      email: 'Ahmed@testlab.com',
      role: 'Frontend Developer',
      id: '8',
    },
    {
      name: 'Hossam Mohamed',
      initial: 'HM',
      email: 'Hossam@testlab.com',
      id: '9',
      role: 'Frontend Developer',
    },
    // {
    //   name: 'Hossam Mohamed',
    //   initial: 'HM',
    //   email: 'Hossam@testlab.com',
    //   id: '10',
    //   role: 'Frontend Developer',
    // },
    // {
    //   name: 'Hossam Mohamed',
    //   initial: 'HM',
    //   email: 'Hossam@testlab.com',
    //   id: '11',
    //   role: 'Frontend Developer',
    // },
    // {
    //   name: 'Hossam Mohamed',
    //   initial: 'HM',
    //   email: 'Hossam@testlab.com',
    //   id: '12',
    //   role: 'Frontend Developer',
    // },
    // {
    //   name: 'Hossam Mohamed',
    //   initial: 'HM',
    //   email: 'Hossam@testlab.com',
    //   id: '13',
    //   role: 'Frontend Developer',
    // },
    // {
    //   name: 'Hossam Mohamed',
    //   initial: 'HM',
    //   email: 'Hossam@testlab.com',
    //   id: '14',
    //   role: 'Frontend Developer',
    // },
    // {
    //   name: 'Hossam Mohamed',
    //   initial: 'HM',
    //   email: 'Hossam@testlab.com',
    //   id: '15',
    //   role: 'Frontend Developer',
    // },
  ]);

  userList = this._userList.asReadonly();
  addUser(userData: EditableUserFields) {
    const initial: string = this.buildInitial(userData.name);
    const id: string = crypto.randomUUID();
    this._userList.update((users) => [...users, { ...userData, initial, id }]);
  }

  editUser(userId: string, userData: EditableUserFields) {
    const initial: string = this.buildInitial(userData.name);
    this._userList.update((users) => {
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
    this._userList.update((users) => users.filter((user) => user.id !== userId));
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
