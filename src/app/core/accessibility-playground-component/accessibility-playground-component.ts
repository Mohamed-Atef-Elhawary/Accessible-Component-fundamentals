import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AccessibilityOption } from '../../interfaces/accessibility-options';

@Component({
  selector: 'app-accessibility-playground-component',
  imports: [FontAwesomeModule],
  templateUrl: './accessibility-playground-component.html',
  styleUrl: './accessibility-playground-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessibilityPlaygroundComponent {
  check: IconDefinition = faCheck;
  accessibilityOptions = input.required<AccessibilityOption[]>();
  toggleOption = output<AccessibilityOption>();
  toggle(option: AccessibilityOption) {
    this.toggleOption.emit(option);
  }
}
