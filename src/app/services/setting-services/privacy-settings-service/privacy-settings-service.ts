import { Injectable } from '@angular/core';
import {
  PrivacyService,
  PrivacySettingsState,
} from '../../../interfaces/disclosure/privacy-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class PrivacySettingsService implements PrivacyService {
  async loadSettings(): Promise<PrivacySettingsState> {
    return { selectedOption: 'friends' };
  }
  async saveSettings(privacySettingsState: PrivacySettingsState): Promise<void> {
    console.log('privacySettingsState', privacySettingsState);
  }
}
