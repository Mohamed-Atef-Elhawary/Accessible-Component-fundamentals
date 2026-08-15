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
      isExpanded: signal(false),
      isShrinked: signal(false),
    },
    {
      name: 'Sarah Ahmed',
      inital: 'SA',
      email: 'sarah@designhub.com',
      role: 'UI/UX Designer',
      isExpanded: signal(false),
      isShrinked: signal(false),
    },
    {
      name: 'Omar Ali',
      inital: 'OA',
      email: 'omar@frontendhub.com',
      role: 'UI/UX Designer',
      isExpanded: signal(false),
      isShrinked: signal(false),
    },
    {
      name: 'Laila Hassan',
      inital: 'LH',
      email: 'laila@stacknet.com',
      role: 'Backend Developer',
      isExpanded: signal(false),
      isShrinked: signal(false),
    },
    {
      name: 'Youssef Nabil',
      inital: 'YN',
      email: 'youssef@testlab.com',
      role: 'DevOps Engineer',
      isExpanded: signal(false),
      isShrinked: signal(false),
    },
  ]);
  users = computed<User[]>(() => this.userList());

  private avatarColors: string[] = ['#5B21B6', '#4338CA', '#0E7490', '#B45309', '#BE123C'];

  hashStringToIndex(str: string, arrayLength: number): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + hash * 31;
    }
    return Math.abs(hash) % arrayLength;
  }

  getAvatarColor(name: string): string {
    const index = this.hashStringToIndex(name, this.avatarColors.length);
    return this.avatarColors[index];
  }
}
