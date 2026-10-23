import { Component, computed, inject } from '@angular/core';
import {
  ToggleSettingMetaData,
  AccessibilitySettingName,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import {
  AccessibilitySettingsStore,
  ACCESSIBILITY_SETTINGS_METADATA,
} from '../../../../../stores/setting-stores/settings/toggle-settings-stores/accessibility-settings-store/accessibility-settings.store';
import { ToggleSettingsListComponent } from '../../shared/toggle/toggle-settings-list-component/toggle-settings-list-component';

@Component({
  imports: [ToggleSettingsListComponent],
  selector: 'app-accessibility-settings-component',
  styleUrl: './accessibility-settings-component.css',
  templateUrl: './accessibility-settings-component.html',
})
export class AccessibilitySettingsComponent {
  accessibilityStore = inject(AccessibilitySettingsStore);
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

  accessibilitySettingsToggler(settingName: string) {
    if (this.isSettingName<AccessibilitySettingName>(settingName, ['contrast', 'motion'])) {
      this.accessibilityStore.toggleSettingState(settingName);
    }
  }

  isSettingName<TName extends string>(
    settingName: string,
    availableNames: TName[],
  ): settingName is TName {
    return availableNames.includes(settingName as TName);
  }
}
