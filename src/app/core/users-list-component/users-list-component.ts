import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { UserService } from '../../services/modal-dialog-services/user-service/user-service';
import { User, UserExpandState } from '../../interfaces/user';
import { AvatarColorService } from '../../services/modal-dialog-services/avatar-color-service/avatar-color-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { UserModalStateService } from '../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { ActivityLogService } from '../../services/modal-dialog-services/activity-log-service';

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
    private activityLogService: ActivityLogService,
  ) {}
  usersExpandState = new Map<string, UserExpandState>();
  users = computed<User[]>(() => this.userService.userList());

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
    this.activityLogService.addActivityLog(`Opened Edit User modal for ${user.name}`);
    this.userModalStateService.openEditModal(user);
  }
  openDeleteModal(userId: string, username: string) {
    this.activityLogService.addActivityLog(`Opened delete User modal for ${username}`);
    this.userModalStateService.openDeleteModal(userId, username);
  }
}
