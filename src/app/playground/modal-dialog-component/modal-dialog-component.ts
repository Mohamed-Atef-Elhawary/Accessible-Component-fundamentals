import {
  Component,
  viewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  effect,
  computed,
  Inject,
  DOCUMENT,
  Renderer2,
  ElementRef,
  afterNextRender,
} from '@angular/core';
import { UsersListComponent } from '../../core/modal-components/users-list-component/users-list-component';
import { HeaderComponent } from '../../core/header-component/header-component';
import { UserModalComponent } from '../../core/modal-components/user-modal-component/user-modal-component';
import { AccessibilityPlaygroundComponent } from '../../core/accessibility-playground-component/accessibility-playground-component';
import { ActivityLogComponent } from '../../core/activity-log-component/activity-log-component';
import { UserModalStateService } from '../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { CloseOnEscapeDirective } from '../../directives/mogal-dialog-directives/close-onscape-directive/close-on-escape-directive';
import { HeaderData } from '../../interfaces/header';
import { ActivityLogService } from '../../services/activity-log/activity-log-service';
import { AccessibilityOption } from '../../interfaces/accessibility-options';
import { ModalAccessibilityStateService } from '../../services/modal-dialog-services/modal-accessibility-state/modal-accessibility-state-service';
@Component({
  selector: 'app-modal-dialog-component',
  imports: [
    UsersListComponent,
    HeaderComponent,
    AccessibilityPlaygroundComponent,
    ActivityLogComponent,
    CloseOnEscapeDirective,
  ],
  templateUrl: './modal-dialog-component.html',
  styleUrl: './modal-dialog-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalDialogComponent {
  headerData: HeaderData = {
    title: ' User Management & Modal Studio',
    description: 'Manage system users and test accessible modal dialog interactions.',
    buttonTitle: 'Add User',
  };
  userModalContainerRef = viewChild<ViewContainerRef, ViewContainerRef>('userModalContainer', {
    read: ViewContainerRef,
  });
  addBtn = viewChild<ElementRef>('addBtn');

  userModalNativeElement!: HTMLElement;
  isModalOpen = computed<boolean>(() => this.userModalStateService.isModalOpen());

  lockScrollOnopendModal = computed<boolean>(
    () => this.modalAccessibilityStateService.lockScroll() && this.isModalOpen(),
  );
  accessibilityOptions = computed<AccessibilityOption[]>(() =>
    this.modalAccessibilityStateService.accessibilityOptions(),
  );
  constructor(
    private userModalStateService: UserModalStateService,
    private modalAccessibilityStateService: ModalAccessibilityStateService,
    private activityLogService: ActivityLogService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
    afterNextRender(() => {
      this.addBtn()?.nativeElement.focus();
    });

    effect(() => {
      if (this.isModalOpen()) {
        this.uploadUserModal();
      } else {
        this.userModalContainerRef()?.clear();
        setTimeout(() => {
          this.userModalStateService.activeElement()?.focus();
        });
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
      await import('../../core/modal-components/user-modal-component/user-modal-component').then(
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

  openAddModal() {
    this.activityLogService.addActivityLog('Opened Add User modal');
    this.userModalStateService.openAddModal();
  }

  onToggleOption(option: AccessibilityOption) {
    this.modalAccessibilityStateService.toggleAccessibilityOptionState(option.id);
    const action = option.checked() ? 'Enabled' : 'Disabled';
    const message = option.label;
    this.activityLogService.addActivityLog(`${action} ${message}`);
  }
}
