import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userList = signal<User[]>([
    {
      name: 'Mohamed Elhawary',
      inital: 'ME',
      email: 'mohamed@devmail.com',
      role: 'Lead Developer',
    },
    {
      name: 'Sarah Ahmed',
      inital: 'SA',
      email: 'sarah@designhub.com',
      role: 'UI/UX Designer',
    },
    {
      name: 'Omar Ali',
      inital: 'OA',
      email: 'Frontend Engineer',
      role: 'UI/UX Designer',
    },
    {
      name: 'Laila Hassan',
      inital: 'LH',
      email: 'laila@stacknet.com',
      role: 'Backend Developer',
    },
    {
      name: 'Youssef Nabil',
      inital: 'YN',
      email: 'youssef@testlab.com',
      role: 'DevOps Engineer',
    },
  ]);
  users = computed<User[]>(() => this.userList());
}
