import { Directive, ElementRef, Host, input } from '@angular/core';
import { AccessibilityStateService } from '../../../services/modal-dialog-services/accessibility-state/accessibility-state-service';
import { UserModalStateService } from '../../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { ActivityLogService } from '../../../services/modal-dialog-services/activity-log/activity-log-service';

@Directive({
  selector: '[appCloseOnBackdropDirective]',
  host: {
    '(click)': 'onclick($event)',
  },
})
export class CloseOnBackdropDirective {
  constructor(
    private elementRef: ElementRef,
    private accessibilityStateService: AccessibilityStateService,
    private userModalStateService: UserModalStateService,
    private activityLogService: ActivityLogService,
  ) {}
  onclick(event: MouseEvent) {
    if (
      this.accessibilityStateService.closeOnBackdropClick() &&
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
