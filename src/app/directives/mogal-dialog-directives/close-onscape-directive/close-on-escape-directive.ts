import { computed, Directive } from '@angular/core';
import { UserModalStateService } from '../../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { AccessibilityStateService } from '../../../services/modal-dialog-services/accessibility-state/accessibility-state-service';
import { ActivityLogService } from '../../../services/modal-dialog-services/activity-log-service';

@Directive({
  selector: '[appCloseOnEscapeDirective]',
  host: {
    '(document:keydown)': 'onkeydown($event)',
  },
})
export class CloseOnEscapeDirective {
  canCloseOnEsc = computed<boolean>(() => {
    const closeOnEsc = this.accessibilityStateService.closeOnEsc();
    const isModalOpen = this.userModalStateService.isModalOpen();
    return closeOnEsc && isModalOpen;
  });

  constructor(
    private userModalStateService: UserModalStateService,
    private accessibilityStateService: AccessibilityStateService,
    private activityLogService: ActivityLogService,
  ) {}

  onkeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.canCloseOnEsc()) {
      this.activityLogService.addActivityLog('Closed modal via ESC key');
      this.clearModal();
    }
  }
  clearModal() {
    this.userModalStateService.clearModal();
  }
}
