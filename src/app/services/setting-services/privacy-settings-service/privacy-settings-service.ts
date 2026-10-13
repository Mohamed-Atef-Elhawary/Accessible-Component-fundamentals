import { Injectable } from '@angular/core';
import { PrivacySettingsState } from '../../../interfaces/disclosure/settings-interfaces/privacy-disclosure-settings';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/global-settings';

@Injectable({
  providedIn: 'root',
})
export class PrivacySettingsService implements SettingsService<PrivacySettingsState> {
  async loadSettings(): Promise<PrivacySettingsState> {
    return { selectedOption: 'public' };
  }
  async saveSettings(privacySettingsState: PrivacySettingsState): Promise<void> {
    console.log('privacySettingsState', privacySettingsState);
  }
}
