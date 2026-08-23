import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-dialog-header-component',
  imports: [FontAwesomeModule],
  templateUrl: './modal-dialog-header-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './modal-dialog-header-component.css',
})
export class ModalDialogHeaderComponent {
  wandSparkles = faWandSparkles;
}
