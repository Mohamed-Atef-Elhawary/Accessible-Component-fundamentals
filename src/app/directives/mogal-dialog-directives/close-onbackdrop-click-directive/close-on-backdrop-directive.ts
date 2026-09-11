import { Directive, ElementRef, Host, input } from '@angular/core';
import { UserModalStateService } from '../../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { ActivityLogService } from '../../../services/activity-log/activity-log-service';
import { ModalAccessibilityStateService } from '../../../services/modal-dialog-services/modal-accessibility-state/modal-accessibility-state-service';

@Directive({
  selector: '[appCloseOnBackdropDirective]',
  host: {
    '(click)': 'onclick($event)',
  },
})
export class CloseOnBackdropDirective {
  constructor(
    private elementRef: ElementRef,
    private modalAccessibilityStateService: ModalAccessibilityStateService,
    private userModalStateService: UserModalStateService,
    private activityLogService: ActivityLogService,
  ) {}
  onclick(event: MouseEvent) {
    if (
      this.modalAccessibilityStateService.closeOnBackdropClick() &&
      this.elementRef.nativeElement === event.target
    ) {
      this.activityLogService.addActivityLog('Closed modal via backdrop click');
      this.clearModal();
    }
  }

  clearModal() {
    this.userModalStateService.clearModal();
  }
}
