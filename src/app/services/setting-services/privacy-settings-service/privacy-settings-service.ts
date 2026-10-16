import { Injectable } from '@angular/core';
import {
  PrivacySettingsState,
  PrivacySettingsValue,
} from '../../../interfaces/disclosure/settings-interfaces/privacy-disclosure-settings';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/global-settings';

@Injectable({
  providedIn: 'root',
})
export class PrivacySettingsService implements SettingsService<PrivacySettingsValue> {
  async loadSettings(): Promise<PrivacySettingsValue> {
    return { selectedOption: 'public' };
  }
  async saveSettings(privacySettingsValue: PrivacySettingsValue): Promise<void> {
    console.log('privacySettingsState', privacySettingsValue);
  }
}
