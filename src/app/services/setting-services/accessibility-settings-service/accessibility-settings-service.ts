import { Injectable } from '@angular/core';
import {
  AccessibilitySettingName,
  ToggleSettingsState,
} from '../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/settings-service';

@Injectable({
  providedIn: 'root',
})
export class AccessibilitySettingsService implements SettingsService<
  ToggleSettingsState<AccessibilitySettingName>
> {
  async loadSettings(): Promise<ToggleSettingsState<AccessibilitySettingName>> {
    return { contrast: false, motion: false };
  }
  async saveSettings(settings: ToggleSettingsState<AccessibilitySettingName>): Promise<void> {}
}
