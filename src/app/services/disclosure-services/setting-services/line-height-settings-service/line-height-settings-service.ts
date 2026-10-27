import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import { LineHeightSetting } from '../../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class LineHeightSettingsService implements SettingsService<LineHeightSetting> {
  async loadSettings(): Promise<LineHeightSetting> {
    return { lineHeightPercent: 150 };
  }
  async saveSettings(): Promise<void> {}
}
