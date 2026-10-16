import { Injectable } from '@angular/core';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/global-settings';
import { DisplaySettingValue } from '../../../interfaces/disclosure/settings-interfaces/display-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class DisplaySettingsService implements SettingsService<DisplaySettingValue> {
  async loadSettings(): Promise<DisplaySettingValue> {
    return { selectedOption: 'system' };
  }
  async saveSettings(displaySettingValue: DisplaySettingValue): Promise<void> {
    console.log('displaySettingState', displaySettingValue);
  }
}
