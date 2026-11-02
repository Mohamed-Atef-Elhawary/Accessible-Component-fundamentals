import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  LineHeightSetting,
  RangeState,
} from '../../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class LineHeightSettingsService implements SettingsService<RangeState<LineHeightSetting>> {
  async loadSettings(): Promise<RangeState<LineHeightSetting>> {
    return { preferredPercent: 150 };
  }
  async saveSettings(preferredPercent: RangeState<LineHeightSetting>): Promise<void> {}
}
