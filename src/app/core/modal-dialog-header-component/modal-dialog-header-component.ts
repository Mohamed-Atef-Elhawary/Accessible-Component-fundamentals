import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModalStateService } from '../../services/modal-dialog-services/user-modal-state/user-modal-state-service';

@Component({
  selector: 'app-modal-dialog-header-component',
  imports: [FontAwesomeModule],
  templateUrl: './modal-dialog-header-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './modal-dialog-header-component.css',
})
export class ModalDialogHeaderComponent {
  constructor(private userModalStateService: UserModalStateService) {}
  openAddModal() {
    this.userModalStateService.openAddModal();
  }
}
