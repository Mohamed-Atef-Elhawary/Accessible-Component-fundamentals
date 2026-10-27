import { Component, computed, inject, Signal } from '@angular/core';
import {
  AccessibilitySetting,
  ToggleSettingOptions,
  ToggleSettingViewData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { AccessibilitySettingsStore } from '../../../../../../stores/setting-stores/settings/toggle/accessibility/accessibility-settings.store';
import { ToggleSettingsListComponent } from '../../../shared/toggle/toggle-settings-list-component/toggle-settings-list-component';
import { ACCESSIBILITY_SETTINGS_METADATA } from '../../../../../../stores/setting-stores/settings/toggle/accessibility/accessibility-constants';
import { FeedbackData } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';

@Component({
  imports: [ToggleSettingsListComponent],
  selector: 'app-accessibility-settings-component',
  styleUrl: './accessibility-settings-component.css',
  templateUrl: './accessibility-settings-component.html',
})
export class AccessibilitySettingsComponent {
  accessibilityStore = inject(AccessibilitySettingsStore);

  private accessibilitySettings: Signal<ToggleSettingViewData<AccessibilitySetting>>[] =
    Object.values(ACCESSIBILITY_SETTINGS_METADATA).map((option) => {
      return computed<ToggleSettingViewData<AccessibilitySetting>>(() => {
        const checked = this.accessibilityStore.draftedState[option.settingName]();
        const feedbackData: FeedbackData = {
          feedbackType: option.settingName,
          payload: checked,
        };
        return {
          ...option,
          checked,
          feedbackData,
        };
      });
    });

  accessibilityViewData = computed<ToggleSettingViewData<AccessibilitySetting>[]>(() => {
    return this.accessibilitySettings.map((setting) => setting());
  });

  accessibilitySettingsToggler(settingName: AccessibilitySetting) {
    this.accessibilityStore.toggleSettingState(settingName);
  }
}
