import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';

import {
  RadioGroupState,
  ThemeSetting,
} from '../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class DisplaySettingsService implements SettingsService<RadioGroupState<ThemeSetting>> {
  async loadSettings(): Promise<RadioGroupState<ThemeSetting>> {
    return { selectedOption: 'system' };
  }
  async saveSettings(displaySettingValue: RadioGroupState<ThemeSetting>): Promise<void> {
    console.log('displaySettingState', displaySettingValue);
  }
}
