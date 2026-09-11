import { computed, Directive } from '@angular/core';
import { UserModalStateService } from '../../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { ActivityLogService } from '../../../services/activity-log/activity-log-service';
import { ModalAccessibilityStateService } from '../../../services/modal-dialog-services/modal-accessibility-state/modal-accessibility-state-service';

@Directive({
  selector: '[appCloseOnEscapeDirective]',
  host: {
    '(document:keydown)': 'onkeydown($event)',
  },
})
export class CloseOnEscapeDirective {
  canCloseOnEsc = computed<boolean>(() => {
    const closeOnEsc = this.modalAccessibilityStateService.closeOnEsc();
    const isModalOpen = this.userModalStateService.isModalOpen();
    return closeOnEsc && isModalOpen;
  });

  constructor(
    private userModalStateService: UserModalStateService,
    private modalAccessibilityStateService: ModalAccessibilityStateService,
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
