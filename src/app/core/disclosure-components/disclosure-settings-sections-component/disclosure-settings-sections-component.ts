import { Component, computed, inject } from '@angular/core';
import { DisclosureSectionComponent } from '../disclosure-section-component/disclosure-section-component';
import { PrivacySettingsComponent } from '../setting-components/privacy-settings-component/privacy-settings-component';
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
import { ToggleSettingsListComponent } from '../setting-components/shared/toggle/toggle-settings-list-component/toggle-settings-list-component';

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
    const email: ToggleSettingMetaData<NotificationSettingName> = {
      ...NOTIFICATION_SETTINGS_METADATA.email,
      checked: this.notificationStore.draftedState.email(),
      preview: {
        feedbackType: 'status',
        payload: `Email notifications turned ${this.notificationStore.draftedState.email() ? 'on' : 'off'}`,
      },
    };
    const push: ToggleSettingMetaData<NotificationSettingName> = {
      ...NOTIFICATION_SETTINGS_METADATA.push,
      checked: this.notificationStore.draftedState.push(),
      preview: {
        feedbackType: 'status',
        payload: `Push notifications turned ${this.notificationStore.draftedState.push() ? 'on' : 'off'}`,
      },
    };
    return [email, push];
  });

  accessibilitySettings = computed<ToggleSettingMetaData<AccessibilitySettingName>[]>(() => {
    const motion: ToggleSettingMetaData<AccessibilitySettingName> = {
      ...ACCESSIBILITY_SETTINGS_METADATA.motion,
      checked: this.accessibilityStore.draftedState.motion(),
      preview: {
        feedbackType: 'motion',
        payload: this.accessibilityStore.draftedState.motion(),
      },
    };

    const contrast: ToggleSettingMetaData<AccessibilitySettingName> = {
      ...ACCESSIBILITY_SETTINGS_METADATA.contrast,
      checked: this.accessibilityStore.draftedState.contrast(),
      preview: {
        feedbackType: 'contrast',
        payload: this.accessibilityStore.draftedState.contrast(),
      },
    };
    return [motion, contrast];
  });
  compactSettings = computed<ToggleSettingMetaData<CompactSettingName>[]>(() => {
    return [
      {
        checked: this.compactSettingsStore.draftedState.compact(),
        ...COMPACT_SETTINGS_METADATA.compact,
        preview: {
          feedbackType: 'compact',
          payload: this.compactSettingsStore.draftedState.compact(),
        },
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
