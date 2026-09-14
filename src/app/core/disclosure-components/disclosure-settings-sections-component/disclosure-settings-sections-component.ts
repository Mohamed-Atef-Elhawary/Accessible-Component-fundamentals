import { Component, signal } from '@angular/core';
import { DisclosureSectionComponent } from '../disclosure-section-component/disclosure-section-component';
import { PrivacySettingsComponent } from '../setting-components/privacy-settings-component/privacy-settings-component';
import { ToggleSettingsListComponent } from '../toggle-settings-list-component/toggle-settings-list-component';
import { SettingList } from '../../../interfaces/settings-list';

@Component({
  imports: [DisclosureSectionComponent, PrivacySettingsComponent, ToggleSettingsListComponent],
  selector: 'app-disclosure-settings-sections-component',
  styleUrl: './disclosure-settings-sections-component.css',
  templateUrl: './disclosure-settings-sections-component.html',
})
export class DisclosureSettingsSectionsComponent {
  notificationSettingList: SettingList[] = [
    { checked: signal(false), id: crypto.randomUUID(), label: 'Email Notifications' },
    { checked: signal(false), id: crypto.randomUUID(), label: 'Push Notifications' },
  ];
  accessibilitySettingList: SettingList[] = [
    { checked: signal(false), id: crypto.randomUUID(), label: 'Reduce motion' },
    { checked: signal(false), id: crypto.randomUUID(), label: 'High contrast ' },
  ];
}
