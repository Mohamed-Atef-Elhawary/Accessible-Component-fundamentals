import { Injectable } from '@angular/core';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/global-settings';
import { DisplaySettingValues } from '../../../interfaces/disclosure/settings-interfaces/display-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class DisplaySettingsService implements SettingsService<DisplaySettingValues> {
  async loadSettings(): Promise<DisplaySettingValues> {
    return { selectedOption: 'system' };
  }
  async saveSettings(displaySettingValues: DisplaySettingValues): Promise<void> {
    console.log('displaySettingState', displaySettingValues);
  }
}
