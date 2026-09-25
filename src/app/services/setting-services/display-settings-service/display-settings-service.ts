import { Injectable } from '@angular/core';
import {
  DisplayService,
  DisplaySettingState,
} from '../../../interfaces/disclosure/display-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class DisplaySettingsService implements DisplayService {
  async loadSettings(): Promise<DisplaySettingState> {
    return { appearance: 'system', compact: true };
  }
  async saveSettings(displaySettingState: DisplaySettingState): Promise<void> {
    console.log('displaySettingState', displaySettingState);
  }
}
