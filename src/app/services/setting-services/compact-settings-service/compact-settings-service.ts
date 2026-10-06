import { Injectable } from '@angular/core';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  CompactSettingName,
  ToggleSettingsState,
} from '../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class CompactSettingsService implements SettingsService<
  ToggleSettingsState<CompactSettingName>
> {
  async loadSettings(): Promise<ToggleSettingsState<CompactSettingName>> {
    return { compact: false };
  }
  async saveSettings(settingState: ToggleSettingsState<CompactSettingName>): Promise<void> {}
}
