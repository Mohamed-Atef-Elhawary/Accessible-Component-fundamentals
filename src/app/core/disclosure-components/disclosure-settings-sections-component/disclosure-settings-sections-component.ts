import { Component, computed, inject, signal } from '@angular/core';
import { DisclosureSectionComponent } from '../disclosure-section-component/disclosure-section-component';
import { PrivacySettingsComponent } from '../setting-components/privacy-settings-component/privacy-settings-component';
import { ToggleSettingsListComponent } from '../setting-components/toggle-settings-list-component/toggle-settings-list-component';
import { DisplayAndAppearanceSettingsComponent } from '../setting-components/display-and-appearance-settings-component/display-and-appearance-settings-component';
import { LanguageSettingsComponent } from '../setting-components/language-settings-component/language-settings-component';
import { ReadabilitySettingsComponent } from '../setting-components/readability-settings-component/readability-settings-component';
import {
  NotificationName,
  NotificationSetting,
  NotificationSettingStore,
} from '../../../stors/setting-stores/NotificationSettingsStore';
import { JsonPipe } from '@angular/common';
@Component({
  imports: [
    DisclosureSectionComponent,
    PrivacySettingsComponent,
    ToggleSettingsListComponent,
    DisplayAndAppearanceSettingsComponent,
    LanguageSettingsComponent,
    ReadabilitySettingsComponent,
    JsonPipe,
  ],
  selector: 'app-disclosure-settings-sections-component',
  styleUrl: './disclosure-settings-sections-component.css',
  templateUrl: './disclosure-settings-sections-component.html',
  providers: [NotificationSettingStore],
})
export class DisclosureSettingsSectionsComponent {
  accessibilitySettingList: Notification[] = [
    // { checked: false, id: crypto.randomUUID(), label: 'Reduce motion' },
    // { checked: false, id: crypto.randomUUID(), label: 'High contrast ' },
  ];
  store = inject(NotificationSettingStore);

  notificationSettings = computed<NotificationSetting[]>(() => {
    const emailNotification: NotificationSetting = { ...this.store.email() };
    const pushNotification: NotificationSetting = { ...this.store.push() };

    return [emailNotification, pushNotification];
  });
  ngOnInit() {}

  onToggleCheckState(notificationName: string) {
    this.store.toggleNotificationState(notificationName as NotificationName);
  }
}
