import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { UserService } from '../../services/user-service/user-service';
import { User, UserExpandState } from '../../interfaces/user';
import { AvatarColorService } from '../../services/avatar-color-service/avatar-color-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { UserModalStateService } from '../../services/modal-dialog-services/user-modal-state/user-modal-state-service';

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
    private userModalStateService: UserModalStateService,
  ) {}
  usersExpandState = new Map<string, UserExpandState>();
  users = computed<User[]>(() => this.userService.users());
  // editUserData = output<User>();
  // deleteUser = output<string>();

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

  openEditModal(user: User) {
    this.userModalStateService.openEditModal(user);
    // this.editUserData.emit(user);
  }
  openDeleteModal(userId: string) {
    this.userModalStateService.openDeleteModal(userId);
    // this.deleteUser.emit(userId);
  }
}
