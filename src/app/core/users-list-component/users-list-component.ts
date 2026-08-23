import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { UserService } from '../../services/user-service/user-service';
import { User, UserExpandState } from '../../interfaces/user';
import { AvatarColorService } from '../../services/avatar-color-service/avatar-color-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users-list-component',
  imports: [FontAwesomeModule],
  templateUrl: './users-list-component.html',
  styleUrl: './users-list-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  chevronDown = faChevronDown;
  chevronRight = faChevronRight;
  constructor(
    private userService: UserService,
    private avatarColorService: AvatarColorService,
  ) {}
  usersExpandState = new Map<string, UserExpandState>();
  users = computed<User[]>(() => this.userService.users());
  editUserData = output<User>();
  deleteUser = output<string>();

  getAvatarColor(name: string): string {
    return this.avatarColorService.getAvatarColor(name);
  }
  applyExpand(user: User): void {
    this.usersExpandState.set(user.id, { isExpanded: signal(true), isShrinked: signal(false) });
  }

  applyShrink(user: User) {
    let userState = this.usersExpandState.get(user.id);
    userState?.isExpanded.set(false);
    userState?.isShrinked.set(true);
    setTimeout(() => {
      userState?.isShrinked.set(false);
    }, 1000);
  }
  getUsersExpandState(user: User): UserExpandState {
    let userState = this.usersExpandState.get(user.id);

    return {
      isExpanded: signal(userState?.isExpanded() || false),
      isShrinked: signal(userState?.isShrinked() || false),
    };
  }

  onEdit(user: User) {
    this.editUserData.emit(user);
  }
  ondelete(userId: string) {
    this.deleteUser.emit(userId);
  }
}
