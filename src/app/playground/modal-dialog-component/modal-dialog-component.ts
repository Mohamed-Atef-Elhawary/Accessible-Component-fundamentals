import {
  Component,
  signal,
  viewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  effect,
  computed,
  Inject,
  DOCUMENT,
  Renderer2,
} from '@angular/core';
import { UsersListComponent } from '../../core/users-list-component/users-list-component';
import { ModalDialogHeaderComponent } from '../../core/modal-dialog-header-component/modal-dialog-header-component';
import { User } from '../../interfaces/user';
import { UserModalComponent } from '../../core/user-modal-component/user-modal-component';
import { ModalInteraction } from '../../types/generalTypes';
import { AccessibilityPlaygroundComponent } from '../../core/accessibility-playground-component/accessibility-playground-component';
import { ActivityLogComponent } from '../../core/activity-log-component/activity-log-component';
import { UserModalStateService } from '../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { AccessibilityStateService } from '../../services/modal-dialog-services/accessibility-state/accessibility-state-service';
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
  lockScrollOnopendModal = computed<boolean>(
    () => this.accessibilityStateService.lockScroll() && this.userModalStateService.isModalOpen(),
  );
  constructor(
    private userModalStateService: UserModalStateService,
    private accessibilityStateService: AccessibilityStateService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
    effect(() => {
      if (this.userModalStateService.isModalOpen()) {
        this.uploadUserModal();
      } else {
        this.userModalContainerRef()?.clear();
      }
      if (this.lockScrollOnopendModal()) {
        this.hideScrollbar();
      } else {
        this.showScrollbar();
      }
    });
  }

  async uploadUserModal(): Promise<void> {
    this.userModalContainerRef()?.clear();
    const userModalComponent: typeof UserModalComponent =
      await import('../../core/user-modal-component/user-modal-component').then(
        (c) => c.UserModalComponent,
      );
    this.userModalContainerRef()?.createComponent(userModalComponent);
  }
  hideScrollbar() {
    const widthDefference = window.innerWidth - this.document.documentElement.clientWidth;
    this.renderer.setStyle(this.document.documentElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.document.documentElement, 'padding-right', `${widthDefference}px`);
    this.renderer.setStyle(this.document.documentElement, 'background-color', '#d2d3d8');
  }
  showScrollbar() {
    this.renderer.setStyle(this.document.documentElement, 'overflow', 'auto');
    this.renderer.setStyle(this.document.documentElement, 'padding-right', '0px');
    this.renderer.setStyle(this.document.documentElement, 'background-color', 'transparent');
  }
}
