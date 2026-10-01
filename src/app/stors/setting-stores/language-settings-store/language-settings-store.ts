import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  Language,
  LanguageData,
  LanguageSettingsText,
  LanguageSettingsState,
} from '../../../interfaces/disclosure/settings-interfaces/language-disclosure-settings';
import { computed, inject } from '@angular/core';
import { LanguageSettingsService } from '../../../services/setting-services/language-settings-service/language-settings-service';

const languageSettingsState: LanguageSettingsState = { selectedLanguage: 'arabic' };
export const languageSettingsStore = signalStore(
  { providedIn: 'root' },
  withState(languageSettingsState),
  withProps(() => ({ languageSettingsService: inject(LanguageSettingsService) })),
  withHooks((store) => ({
    async onInit() {
      const languageSettingsState = await store.languageSettingsService.loadSettings();
      patchState(store, languageSettingsState);
    },
  })),
  withComputed(({ selectedLanguage }) => ({
    languageDataList: computed<LanguageData[]>(() => {
      const arabicLang: LanguageData = {
        name: 'language',
        value: 'arabic',
        checked: selectedLanguage() === 'arabic',
      };

      const englishLang: LanguageData = {
        name: 'language',
        value: 'english',
        checked: selectedLanguage() === 'english',
      };
      return [arabicLang, englishLang];
    }),

    languageSettingsText: computed<LanguageSettingsText>(() => {
      if (selectedLanguage() === 'arabic') {
        return {
          direction: 'rtl',
          langTitle: 'اللغة',
          notificationText:
            'يتغير اتجاه النص وتخطيط الصفحة في جميع أنحاء التطبيق تبعًا للغة المختارة.',
          dateTitle: 'تنسيق التاريخ',
        };
      }
      return {
        direction: 'ltr',
        langTitle: 'Langauge',
        notificationText: `Text direction and page layout change throughout the application based on the selected language.`,
        dateTitle: 'Date format',
      };
    }),
  })),
  withMethods((store) => ({
    switchLanguageState(selectedLanguage: Language): void {
      patchState(store, { selectedLanguage });
    },
  })),
);
