import { Component, computed, inject, signal } from '@angular/core';
import { DisclosureSectionComponent } from '../disclosure-section-component/disclosure-section-component';
import { PrivacySettingsComponent } from '../setting-components/privacy-settings-component/privacy-settings-component';
import { ToggleSettingsListComponent } from '../setting-components/toggle/toggle-settings-list-component/toggle-settings-list-component';
import { DisplayAndAppearanceSettingsComponent } from '../setting-components/display-and-appearance-settings-component/display-and-appearance-settings-component';
import { LanguageSettingsComponent } from '../setting-components/language-settings-component/language-settings-component';
import { ReadabilitySettingsComponent } from '../setting-components/readability-settings-component/readability-settings-component';

import {
  AccessibilitySettingName,
  CompactSettingName,
  NotificationSettingName,
  ToggleSettingMetaData,
} from '../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import {
  NOTIFICATION_SETTINGS_METADATA,
  NotificationSettingsStore,
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
  AccessibilitySettingsStore,
} from '../../../stors/setting-stores/settings/toggle-settings-stores/accessibility-settings-store/accessibility-settings.store';
import {
  LINE_HEIGHT_SETTINGS_METADATA,
  LineHeightSettingsStore,
} from '../../../stors/setting-stores/settings/readability-settings-stores/line-height-settings-store/line-height-settings-store';
import {
  COMPACT_SETTINGS_METADATA,
  CompactSettingsStore,
} from '../../../stors/setting-stores/settings/toggle-settings-stores/compact-settings-store/compact-settings-store';
import { FeedbackData } from '../../../interfaces/disclosure/global-interfaces/global-settings';

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
  notificationStore = inject(NotificationSettingsStore);
  accessibilityStore = inject(AccessibilitySettingsStore);
  compactSettingsStore = inject(CompactSettingsStore);

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

  EmailnotificationFeedbackData = computed<FeedbackData<string>>(() => ({
    feedback: 'status',
    payload: `Email notifications turned ${this.notificationStore.email() ? 'on' : 'off'}`,
  }));

  pushnotificationFeedbackData = computed<FeedbackData<string>>(() => ({
    feedback: 'status',
    payload: `Push notifications turned ${this.notificationStore.push() ? 'on' : 'off'}`,
  }));

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
  motionAccessibilitySettingsFeedbackData = computed<FeedbackData<boolean>>(() => ({
    feedback: 'motion',
    payload: this.accessibilityStore.motion(),
  }));
  contrastAccessibilitySettingsFeedbackData = computed<FeedbackData<boolean>>(() => ({
    feedback: 'motion',
    payload: this.accessibilityStore.contrast(),
  }));
  compactSettings = computed<ToggleSettingMetaData<CompactSettingName>[]>(() => {
    return [
      {
        checked: this.compactSettingsStore.compact(),
        ...COMPACT_SETTINGS_METADATA.compact,
      },
    ];
  });

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
  compactSettingsToggler(settingName: string) {
    if (this.isSettingName<CompactSettingName>(settingName, ['compact'])) {
      this.compactSettingsStore.toggleSettingState(settingName);
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
