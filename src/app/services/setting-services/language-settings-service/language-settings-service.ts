import { Injectable } from '@angular/core';
import { LanguageSettingsState } from '../../../interfaces/disclosure/settings-interfaces/language-disclosure-settings';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/settings-service';

@Injectable({
  providedIn: 'root',
})
export class LanguageSettingsService implements SettingsService<LanguageSettingsState> {
  async loadSettings(): Promise<LanguageSettingsState> {
    return { selectedLanguage: 'english' };
  }
  async saveSettings(languageSettingsState: LanguageSettingsState): Promise<void> {}
}
