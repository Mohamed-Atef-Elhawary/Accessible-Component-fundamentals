import { Injectable } from '@angular/core';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/global-settings';
import { TextSizeSettingsState } from '../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class TextSizeSettingsService implements SettingsService<TextSizeSettingsState> {
  async loadSettings(): Promise<TextSizeSettingsState> {
    return { textSizePercent: 100 };
  }
  async saveSettings(): Promise<void> {}
}
