import { Component, ComponentRef, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { UsersListComponent } from '../../core/users-list-component/users-list-component';
import { ModalDialogHeaderComponent } from '../../core/modal-dialog-header-component/modal-dialog-header-component';
import { User } from '../../interfaces/user';
import { UserModalComponent } from '../../core/user-modal-component/user-modal-component';
import { ModalInteraction } from '../../types/generalTypes';
@Component({
  selector: 'app-modal-dialog-component',
  imports: [UsersListComponent, ModalDialogHeaderComponent],
  templateUrl: './modal-dialog-component.html',
  styleUrl: './modal-dialog-component.css',
})
export class ModalDialogComponent {
  @ViewChild('userModalContainer', { read: ViewContainerRef })
  userModalContainer!: ViewContainerRef;
  modalInteraction = signal<ModalInteraction>('edit');
  userData = signal<User | null>(null);
  userId = signal<string | null>(null);

  onEdit(userData: User) {
    this.modalInteraction.set('edit');
    this.userData.set(userData);
    this.uploadUserModal();
  }
  ondelete(userId: string) {
    this.modalInteraction.set('delete');
    this.userId.set(userId);
    this.uploadUserModal();
  }

  async uploadUserModal(): Promise<void> {
    this.userModalContainer.clear();
    const suerModalComponent: typeof UserModalComponent =
      await import('../../core/user-modal-component/user-modal-component').then(
        (c) => UserModalComponent,
      );
    const userModalComponentRef: ComponentRef<UserModalComponent> =
      this.userModalContainer.createComponent(suerModalComponent);

    userModalComponentRef.setInput('modalInteraction', this.modalInteraction());
    if (this.userData()) {
      userModalComponentRef.setInput('userData', this.userData());
    } else if (this.userId()) {
      userModalComponentRef.setInput('userId', this.userId());
    }
  }
}
