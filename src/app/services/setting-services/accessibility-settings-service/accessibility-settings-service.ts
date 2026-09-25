import { Injectable } from '@angular/core';
import {
  AccessibilitySettingName,
  ToggleService,
  ToggleSettingsState,
} from '../../../interfaces/disclosure/toggle-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class AccessibilitySettingsService implements ToggleService<AccessibilitySettingName> {
  async loadSettings(): Promise<ToggleSettingsState<AccessibilitySettingName>> {
    return { contrast: false, motion: false };
  }
  async saveSettings(settings: ToggleSettingsState<AccessibilitySettingName>): Promise<void> {}
}
