import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { HeaderData } from '../../interfaces/header';
import { HeaderComponent } from '../../core/header-component/header-component';
import { DisclosureAccessibilityStateService } from '../../services/disclosure-services/asseccibility-state/disclosure-accessibility-state-service';
import { AccessibilityOption } from '../../interfaces/accessibility-options';
import { AccessibilityPlaygroundComponent } from '../../core/accessibility-playground-component/accessibility-playground-component';
import { ActivityLogComponent } from '../../core/activity-log-component/activity-log-component';

@Component({
  selector: 'app-disclosure-component',
  imports: [HeaderComponent, AccessibilityPlaygroundComponent, ActivityLogComponent],
  templateUrl: './disclosure-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './disclosure-component.css',
})
export class DisclosureComponent {
  headerData: HeaderData = {
    title: ' User Settings & Disclosure Studio',
    description: 'Manage preferences and test accessible panel interactions.',
    buttonTitle: ' Save Settings',
  };

  accessibilityOptions = computed<AccessibilityOption[]>(() =>
    this.disclosureAccessibilityStateService.accessibilityOptions(),
  );
  constructor(private disclosureAccessibilityStateService: DisclosureAccessibilityStateService) {}
  ngOnInit() {
    console.log(this.accessibilityOptions());
    this.disclosureAccessibilityStateService.toggleAccessibilityState('multibleOpenSectionss');
    console.log(this.accessibilityOptions());
  }
  saveSettings() {
    console.log('save');
  }
}
