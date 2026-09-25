import { Component, computed, inject } from '@angular/core';
import { DisclosureSectionComponent } from '../disclosure-section-component/disclosure-section-component';
import { PrivacySettingsComponent } from '../setting-components/privacy-settings-component/privacy-settings-component';
import { ToggleSettingsListComponent } from '../setting-components/toggle-settings-list-component/toggle-settings-list-component';
import { DisplayAndAppearanceSettingsComponent } from '../setting-components/display-and-appearance-settings-component/display-and-appearance-settings-component';
import { LanguageSettingsComponent } from '../setting-components/language-settings-component/language-settings-component';
import { ReadabilitySettingsComponent } from '../setting-components/readability-settings-component/readability-settings-component';

import { JsonPipe } from '@angular/common';

import {
  AccessibilitySettingName,
  NotificationSettingName,
  ToggleSettingMetaData,
} from '../../../interfaces/disclosure/toggle-disclosure-settings';
import {
  NOTIFICATION_SETTINGS_METADATA,
  notificationSettingsStore,
} from '../../../stors/setting-stores/notification-settings-store/notification-settings-store';
import {
  ACCESSIBILITY_SETTINGS_METADATA,
  accessibilitySettingsStore,
} from '../../../stors/setting-stores/accessibility-settings-store/accessibility-settings.store';

type AccssibilityName = 'motion' | 'contrast';
export interface AccssibilitySetting {
  id: string;
  notificationName: AccssibilityName;
  label: string;
  checked: boolean;
}

@Component({
  imports: [
    DisclosureSectionComponent,
    PrivacySettingsComponent,
    ToggleSettingsListComponent,
    DisplayAndAppearanceSettingsComponent,
    LanguageSettingsComponent,
    ReadabilitySettingsComponent,
  ],
  selector: 'app-disclosure-settings-sections-component',
  styleUrl: './disclosure-settings-sections-component.css',
  templateUrl: './disclosure-settings-sections-component.html',
})
export class DisclosureSettingsSectionsComponent {
  notificationStore = inject(notificationSettingsStore);
  accessibilityStore = inject(accessibilitySettingsStore);

  notificationSettings = computed<ToggleSettingMetaData<NotificationSettingName>[]>(() => {
    const email = {
      ...NOTIFICATION_SETTINGS_METADATA.email,
      checked: this.notificationStore.email(),
    };
    const push = {
      ...NOTIFICATION_SETTINGS_METADATA.push,
      checked: this.notificationStore.push(),
    };
    return [email, push];
  });

  accessibilitySettings = computed<ToggleSettingMetaData<AccessibilitySettingName>[]>(() => {
    const motion = {
      ...ACCESSIBILITY_SETTINGS_METADATA.motion,
      checked: this.accessibilityStore.motion(),
    };
    const Contrast = {
      ...ACCESSIBILITY_SETTINGS_METADATA.contrast,
      checked: this.accessibilityStore.contrast(),
    };
    return [motion, Contrast];
  });

  // accessibilitySettingsToggler(settingName: string) {
  //   if (this.isAccessibilitySettingName(settingName)) {
  //     this.accessibilitySettingsStore.toggleSettingState(settingName);
  //   }
  // }
  // isAccessibilitySettingName(settingName: string): settingName is AccessibilitySettingName {
  //   const availableSetting: AccessibilitySettingName[] = ['contrast', 'motion'];
  //   return availableSetting.includes(settingName as AccessibilitySettingName);
  // }
  notificationSettingsToggler(settingName: string) {
    if (this.isSettingName<NotificationSettingName>(settingName, ['email', 'push'])) {
      this.notificationStore.toggleSettingState(settingName);
    }
  }

  accessibilitySettingsToggler(settingName: string) {
    if (this.isSettingName<AccessibilitySettingName>(settingName, ['contrast', 'motion'])) {
      this.accessibilityStore.toggleSettingState(settingName);
    }
  }
  isSettingName<TName extends string>(
    settingname: string,
    availableNames: TName[],
  ): settingname is TName {
    return availableNames.includes(settingname as TName);
  }
}
