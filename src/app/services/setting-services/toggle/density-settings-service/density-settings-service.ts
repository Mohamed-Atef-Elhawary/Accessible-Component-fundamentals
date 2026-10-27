import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  DensitySetting,
  ToggleSettingsState,
} from '../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class DensitySettingsService implements SettingsService<
  ToggleSettingsState<DensitySetting>
> {
  async loadSettings(): Promise<ToggleSettingsState<DensitySetting>> {
    return { compact: false };
  }
  async saveSettings(settingState: ToggleSettingsState<DensitySetting>): Promise<void> {}
}
