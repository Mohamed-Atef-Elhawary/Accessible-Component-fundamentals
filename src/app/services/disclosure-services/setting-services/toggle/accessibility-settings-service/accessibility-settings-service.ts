import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  ToggleSettingsState,
  AccessibilitySetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class AccessibilitySettingsService implements SettingsService<
  ToggleSettingsState<AccessibilitySetting>
> {
  async loadSettings(): Promise<ToggleSettingsState<AccessibilitySetting>> {
    return { contrast: false, motion: false };
  }
  async saveSettings(settings: ToggleSettingsState<AccessibilitySetting>): Promise<void> {}
}
