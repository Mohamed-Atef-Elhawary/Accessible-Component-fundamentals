import { Component, computed, signal } from '@angular/core';
import { UserService } from '../../services/user-service/user-service';
import { User } from '../../interfaces/user';
import { ChevronDown, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-users-list-component',
  imports: [LucideAngularModule],
  templateUrl: './users-list-component.html',
  styleUrl: './users-list-component.css',
})
export class UsersListComponent {
  chevronDown = ChevronDown;
  chevronRight = ChevronRight;
  constructor(private userService: UserService) {}

  users = computed<User[]>(() => this.userService.users());

  getAvatarColor(name: string): string {
    return this.userService.getAvatarColor(name);
  }

  applyShrink(user: User) {
    user.isExpanded.set(false);
    user.isShrinked.set(true);
    setTimeout(() => {
      user.isShrinked.set(false);
    }, 1000);
  }
}
