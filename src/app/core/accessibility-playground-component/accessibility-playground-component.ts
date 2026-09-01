import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AccessibilityStateService } from '../../services/modal-dialog-services/accessibility-state/accessibility-state-service';
import { ActivityLogService } from '../../services/modal-dialog-services/activity-log-service';

@Component({
  selector: 'app-accessibility-playground-component',
  imports: [FontAwesomeModule],
  templateUrl: './accessibility-playground-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './accessibility-playground-component.css',
})
export class AccessibilityPlaygroundComponent {
  check: IconDefinition = faCheck;

  closeOnBackdropClick = computed<boolean>(() => this.accessibilityService.closeOnBackdropClick());
  closeOnEsc = computed<boolean>(() => this.accessibilityService.closeOnEsc());
  lockScroll = computed<boolean>(() => this.accessibilityService.lockScroll());

  constructor(
    private accessibilityService: AccessibilityStateService,
    private activityLogService: ActivityLogService,
  ) {}
  showBackdropIcon = signal<boolean>(false);

  toggleCloseOnBackdropClick() {
    this.accessibilityService.toggleCloseOnBackdropClick();
    const action = this.closeOnBackdropClick() ? 'Enabled' : 'Disabled';
    const message = 'Close on Backdrop Click';
    this.activityLogService.addActivityLog(`${action} ${message}`);
  }
  toggleCloseOnEsc() {
    this.accessibilityService.toggleCloseOnEsc();
    const action = this.closeOnEsc() ? 'Enabled' : 'Disabled';
    const message = 'Close on ESC';
    this.activityLogService.addActivityLog(`${action} ${message}`);
  }
  toggleLockScroll() {
    this.accessibilityService.toggleLockScroll();
    const action = this.lockScroll() ? 'Enabled' : 'Disabled';
    const message = 'Lock Scroll';
    this.activityLogService.addActivityLog(`${action} ${message}`);
  }
}
