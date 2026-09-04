import {
  Component,
  ChangeDetectionStrategy,
  output,
  viewChild,
  afterNextRender,
  ElementRef,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModalStateService } from '../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { ActivityLogService } from '../../services/modal-dialog-services/activity-log/activity-log-service';

@Component({
  selector: 'app-modal-dialog-header-component',
  imports: [FontAwesomeModule],
  templateUrl: './modal-dialog-header-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './modal-dialog-header-component.css',
})
export class ModalDialogHeaderComponent {
  addBtn = viewChild<ElementRef>('addBtn');
  constructor(
    private userModalStateService: UserModalStateService,
    private activityLogService: ActivityLogService,
  ) {
    afterNextRender(() => {
      this.addBtn()?.nativeElement.focus();
    });
  }
  openAddModal() {
    this.activityLogService.addActivityLog('Opened Add User modal');
    this.userModalStateService.openAddModal();
  }
}
