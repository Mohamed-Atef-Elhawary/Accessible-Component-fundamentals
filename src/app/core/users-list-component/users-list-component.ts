import { Component, computed } from '@angular/core';
import { UserService } from '../../services/user-service/user-service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-users-list-component',
  imports: [],
  templateUrl: './users-list-component.html',
  styleUrl: './users-list-component.css',
})
export class UsersListComponent {
  constructor(private userService: UserService) {}
  users = computed<User[]>(() => this.userService.users());
}
