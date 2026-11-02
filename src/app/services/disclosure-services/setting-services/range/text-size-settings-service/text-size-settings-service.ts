import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../../interfaces/disclosure/global-interfaces/global-settings';
import { RangeState, TextSizeSetting } from '../../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class TextSizeSettingsService implements SettingsService<RangeState<TextSizeSetting> >{
  async loadSettings(): Promise<RangeState<TextSizeSetting>> {
    return { preferredPercent: 100 };
  }
  async saveSettings(preferredPercent:RangeState<TextSizeSetting>): Promise<void> {}
}
