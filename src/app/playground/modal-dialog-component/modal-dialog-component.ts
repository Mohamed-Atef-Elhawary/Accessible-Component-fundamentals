import {
  Component,
  ComponentRef,
  signal,
  viewChild,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UsersListComponent } from '../../core/users-list-component/users-list-component';
import { ModalDialogHeaderComponent } from '../../core/modal-dialog-header-component/modal-dialog-header-component';
import { User } from '../../interfaces/user';
import { UserModalComponent } from '../../core/user-modal-component/user-modal-component';
import { ModalInteraction } from '../../types/generalTypes';
import { UserService } from '../../services/user-service/user-service';
import { AccessibilityPlaygroundComponent } from '../../core/accessibility-playground-component/accessibility-playground-component';
import { ActivityLogComponent } from '../../core/activity-log-component/activity-log-component';
@Component({
  selector: 'app-modal-dialog-component',
  imports: [
    UsersListComponent,
    ModalDialogHeaderComponent,
    AccessibilityPlaygroundComponent,
    ActivityLogComponent,
  ],
  templateUrl: './modal-dialog-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './modal-dialog-component.css',
})
export class ModalDialogComponent {
  userModalContainerRef = viewChild<ViewContainerRef, ViewContainerRef>('userModalContainer', {
    read: ViewContainerRef,
  });
  userModalNativeElement!: HTMLElement;
  modalInteraction = signal<ModalInteraction>('edit');
  userData = signal<User | null>(null);
  userId = signal<string | null>(null);
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.showModalSubject$.subscribe((showModal: boolean) => {
      if (!showModal) {
        this.userModalContainerRef()?.clear();
      }
    });
  }
  onEdit(userData: User) {
    console.log('gggggggggggggggggggggggggg');
    this.modalInteraction.set('edit');
    this.userData.set(userData);
    this.uploadUserModal();
  }
  onDelete(userId: string) {
    this.modalInteraction.set('delete');
    this.userId.set(userId);
    this.uploadUserModal();
  }
  onAdd() {
    this.modalInteraction.set('add');
    this.uploadUserModal();
  }

  async uploadUserModal(): Promise<void> {
    const userModalContainerRef: ViewContainerRef = this.userModalContainerRef()!;
    userModalContainerRef.clear();
    const userModalComponent: typeof UserModalComponent =
      await import('../../core/user-modal-component/user-modal-component').then(
        (c) => UserModalComponent,
      );
    const userModalComponentRef: ComponentRef<UserModalComponent> =
      userModalContainerRef.createComponent(userModalComponent)!;
    this.userModalNativeElement = userModalComponentRef.location.nativeElement;
    userModalComponentRef.setInput('modalInteraction', this.modalInteraction());
    if (this.modalInteraction() === 'edit') {
      userModalComponentRef.setInput('userData', this.userData());
    } else if (this.modalInteraction() === 'delete') {
      userModalComponentRef.setInput('userId', this.userId());
    }
  }
}
