import { Component, computed, inject, signal } from '@angular/core';
import { DisclosureSectionComponent } from '../disclosure-section-component/disclosure-section-component';
import { PrivacySettingsComponent } from '../setting-components/privacy-settings-component/privacy-settings-component';
import { ToggleSettingsListComponent } from '../setting-components/toggle-settings-list-component/toggle-settings-list-component';
import { DisplayAndAppearanceSettingsComponent } from '../setting-components/display-and-appearance-settings-component/display-and-appearance-settings-component';
import { LanguageSettingsComponent } from '../setting-components/language-settings-component/language-settings-component';
import { ReadabilitySettingsComponent } from '../setting-components/readability-settings-component/readability-settings-component';

import {
  AccessibilitySettingName,
  NotificationSettingName,
  ToggleSettingMetaData,
} from '../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import {
  NOTIFICATION_SETTINGS_METADATA,
  notificationSettingsStore,
} from '../../../stors/setting-stores/settings/toggle-settings-stores/notification-settings-store/notification-settings-store';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  LineHeightSettingsState,
  ReadabilitySettingsText,
  TextSizeSettingsState,
} from '../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';
import {
  TEXT_SIZE_SETTINGS_METADATA,
  TextSizeSettingsStore,
} from '../../../stors/setting-stores/settings/readability-settings-stores/text-size-settings-store/text-size-settings-store';
import {
  ACCESSIBILITY_SETTINGS_METADATA,
  accessibilitySettingsStore,
} from '../../../stors/setting-stores/settings/toggle-settings-stores/accessibility-settings-store/accessibility-settings.store';
import {
  LINE_HEIGHT_SETTINGS_METADATA,
  LineHeightSettingsStore,
} from '../../../stors/setting-stores/settings/readability-settings-stores/line-height-settings-store/line-height-settings-store';

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

  ///////////////////////////////////////////////////////////////////////

  textSizeSettingsStore = inject(TextSizeSettingsStore);
  lineHeightSettingsStore = inject(LineHeightSettingsStore);

  textSizeSettings = computed<ReadabilitySettingsText>(() => {
    return {
      ...TEXT_SIZE_SETTINGS_METADATA,
      settingRangeValue: this.textSizeSettingsStore.textSizePercent(),
    };
  });

  lineHeightSettings = computed<ReadabilitySettingsText>(() => {
    return {
      ...LINE_HEIGHT_SETTINGS_METADATA,
      settingRangeValue: this.lineHeightSettingsStore.lineHeightPercent(),
    };
  });

  onTextSizeRangeValue(value: number) {
    const newTextSizeRangeValue: TextSizeSettingsState = { textSizePercent: value };
    this.textSizeSettingsStore.updateSettingState(newTextSizeRangeValue);
  }
  onLineHeightRangeValue(value: number) {
    const newLineHeightRangeValue: LineHeightSettingsState = { lineHeightPercent: value };

    this.lineHeightSettingsStore.updateSettingState(newLineHeightRangeValue);
  }
}
