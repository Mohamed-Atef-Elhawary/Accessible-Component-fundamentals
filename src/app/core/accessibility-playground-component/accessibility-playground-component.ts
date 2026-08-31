import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AccessibilityStateService } from '../../services/modal-dialog-services/accessibility-state/accessibility-state-service';

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

  constructor(private accessibilityService: AccessibilityStateService) {}
  showBackdropIcon = signal<boolean>(false);

  toggleCloseOnBackdropClick() {
    (this, this.accessibilityService.toggleCloseOnBackdropClick());
  }
  toggleCloseOnEsc() {
    this.accessibilityService.toggleCloseOnEsc();
  }
  toggleLookScroll() {
    this.accessibilityService.toggleLookScroll();
  }
}
