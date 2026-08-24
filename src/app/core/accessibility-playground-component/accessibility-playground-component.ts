import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AccessibilityService } from '../../services/accessibility-service/accessibility-service';

@Component({
  selector: 'app-accessibility-playground-component',
  imports: [FontAwesomeModule],
  templateUrl: './accessibility-playground-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './accessibility-playground-component.css',
})
export class AccessibilityPlaygroundComponent {
  check: IconDefinition = faCheck;

  backdropAccess = computed<boolean>(() => this.accessibilityService.backdropAccess());
  escAccess = computed<boolean>(() => this.accessibilityService.escAccess());
  scrollAccess = computed<boolean>(() => this.accessibilityService.scrollAccess());

  constructor(private accessibilityService: AccessibilityService) {}
  showBackdropIcon = signal<boolean>(false);
  toggleBackdropAccess() {
    this.accessibilityService.backdropAccess.update((status: boolean) => !status);
  }
  toggleEscAccess() {
    this.accessibilityService.escAccess.update((status: boolean) => !status);
  }
  toggleScrollAccess() {
    this.accessibilityService.scrollAccess.update((status: boolean) => !status);
  }
}
