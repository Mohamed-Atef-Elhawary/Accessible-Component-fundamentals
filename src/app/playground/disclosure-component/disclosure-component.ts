import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { HeaderData } from '../../interfaces/header-data';
import { HeaderComponent } from '../../core/header-component/header-component';
import { DisclosureAccessibilityStateService } from '../../services/disclosure-services/asseccibility-state/disclosure-accessibility-state-service';
import { AccessibilityOption } from '../../interfaces/accessibility-options';
import { AccessibilityPlaygroundComponent } from '../../core/accessibility-playground-component/accessibility-playground-component';
import { ActivityLogComponent } from '../../core/activity-log-component/activity-log-component';
import { ActivityLogService } from '../../services/activity-log/activity-log-service';
import { DisclosureSettingsSectionsComponent } from '../../core/disclosure-components/disclosure-settings-sections-component/disclosure-settings-sections-component';

@Component({
  selector: 'app-disclosure-component',
  imports: [
    HeaderComponent,
    AccessibilityPlaygroundComponent,
    ActivityLogComponent,
    DisclosureSettingsSectionsComponent,
  ],
  templateUrl: './disclosure-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  constructor(
    private disclosureAccessibilityStateService: DisclosureAccessibilityStateService,
    private activityLogService: ActivityLogService,
  ) {}

  saveSettings() {
    console.log('save');
  }

  onToggleOption(option: AccessibilityOption) {
    this.disclosureAccessibilityStateService.toggleAccessibilityOptionState(option.id);
    const action = option.checked() ? 'Enabled' : 'Disabled';
    const message = option.label;
    this.activityLogService.addActivityLog(`${action} ${message}`);
  }
}
