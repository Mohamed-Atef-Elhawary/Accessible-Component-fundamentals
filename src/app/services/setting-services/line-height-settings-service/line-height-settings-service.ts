import { Injectable } from '@angular/core';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/global-settings';
import { LineHeightSettingsState } from '../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class LineHeightSettingsService implements SettingsService<LineHeightSettingsState> {
  async loadSettings(): Promise<LineHeightSettingsState> {
    return { lineHeightPercent: 150 };
  }
  async saveSettings(): Promise<void> {}
}
