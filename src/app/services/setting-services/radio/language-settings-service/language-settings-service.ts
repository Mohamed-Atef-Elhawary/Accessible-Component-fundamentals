import { Injectable } from '@angular/core';

import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  LanguageSetting,
  RadioGroupState,
} from '../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class LanguageSettingsService implements SettingsService<RadioGroupState<LanguageSetting>> {
  async loadSettings(): Promise<RadioGroupState<LanguageSetting>> {
    return { selectedOption: 'english' };
  }
  async saveSettings(languageSettingsState: RadioGroupState<LanguageSetting>): Promise<void> {}
}
