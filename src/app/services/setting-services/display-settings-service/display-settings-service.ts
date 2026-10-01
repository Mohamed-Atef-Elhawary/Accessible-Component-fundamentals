import { Injectable } from '@angular/core';
import { DisplaySettingState } from '../../../interfaces/disclosure/settings-interfaces/display-disclosure-settings';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/settings-service';

@Injectable({
  providedIn: 'root',
})
export class DisplaySettingsService implements SettingsService<DisplaySettingState> {
  async loadSettings(): Promise<DisplaySettingState> {
    return { appearance: 'system', compact: true };
  }
  async saveSettings(displaySettingState: DisplaySettingState): Promise<void> {
    console.log('displaySettingState', displaySettingState);
  }
}
