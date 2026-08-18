import { Component } from '@angular/core';
import { UsersListComponent } from '../../core/users-list-component/users-list-component';
import { ModalDialogHeaderComponent } from '../../core/modal-dialog-header-component/modal-dialog-header-component';
import { User } from '../../interfaces/user';
@Component({
  selector: 'app-modal-dialog-component',
  imports: [UsersListComponent, ModalDialogHeaderComponent],
  templateUrl: './modal-dialog-component.html',
  styleUrl: './modal-dialog-component.css',
})
export class ModalDialogComponent {
  onEdit(user: User) {
    console.log(user);
  }
  ondelete(userId: string) {
    console.log(userId);
  }
}
