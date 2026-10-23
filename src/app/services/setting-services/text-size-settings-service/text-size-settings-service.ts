import { Injectable } from '@angular/core';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/global-settings';
import { TextSizeSetting } from '../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class TextSizeSettingsService implements SettingsService<TextSizeSetting> {
  async loadSettings(): Promise<TextSizeSetting> {
    return { textSizePercent: 100 };
  }
  async saveSettings(): Promise<void> {}
}
