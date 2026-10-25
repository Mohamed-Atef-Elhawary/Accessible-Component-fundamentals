import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  DensitySettingName,
  ToggleSettingsState,
} from '../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class DensitySettingsService implements SettingsService<
  ToggleSettingsState<DensitySettingName>
> {
  async loadSettings(): Promise<ToggleSettingsState<DensitySettingName>> {
    return { compact: false };
  }
  async saveSettings(settingState: ToggleSettingsState<DensitySettingName>): Promise<void> {}
}
