import { Component, signal } from '@angular/core';
import { DisclosureSectionComponent } from '../disclosure-section-component/disclosure-section-component';
import { PrivacySettingsComponent } from '../setting-components/privacy-settings-component/privacy-settings-component';
import { ToggleSettingsListComponent } from '../setting-components/toggle-settings-list-component/toggle-settings-list-component';
import { SettingList } from '../../../interfaces/disclosure-settings';
import { DisplayAndAppearanceSettingsComponent } from '../setting-components/display-and-appearance-settings-component/display-and-appearance-settings-component';
import { LanguageSettingsComponent } from '../setting-components/language-settings-component/language-settings-component';

@Component({
  imports: [
    DisclosureSectionComponent,
    PrivacySettingsComponent,
    ToggleSettingsListComponent,
    DisplayAndAppearanceSettingsComponent,
    LanguageSettingsComponent,
  ],
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
