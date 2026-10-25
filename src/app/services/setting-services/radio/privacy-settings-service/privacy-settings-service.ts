import { Injectable } from '@angular/core';

import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  PrivacySetting,
  RadioGroupState,
} from '../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class PrivacySettingsService implements SettingsService<RadioGroupState<PrivacySetting>> {
  async loadSettings(): Promise<RadioGroupState<PrivacySetting>> {
    return { selectedOption: 'public' };
  }
  async saveSettings(privacySettingsValue: RadioGroupState<PrivacySetting>): Promise<void> {
    console.log('privacySettingsState', privacySettingsValue);
  }
}
