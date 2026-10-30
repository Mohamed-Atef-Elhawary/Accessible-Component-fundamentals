import { Component, inject, computed, signal, DestroyRef, afterNextRender } from '@angular/core';
import { LanguageSettingsStore } from '../../../../../../stores/setting-stores/settings/radio/language/language-settings-store';
import {
  LANGUAGE_SETTINGS_METADATA,
  LANGUAGE_SETTINGS_TITLE,
  LANGUAGE_TRANSLATIONS,
} from '../../../../../../stores/setting-stores/settings/radio/language/language-settings-constants';
import {
  LanguageSetting,
  RadioGroupViewData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { RadioGroupSettingsComponent } from '../../../shared/radio/radio-group-settings-component/radio-group-settings-component';

@Component({
  imports: [RadioGroupSettingsComponent],
  selector: 'app-language-settings-component',
  styleUrl: './language-settings-component.css',
  templateUrl: './language-settings-component.html',
})
export class LanguageSettingsComponent {
  languageStore = inject(LanguageSettingsStore);

  selectedLanguage = computed(() => this.languageStore.draftedState.selectedOption());

  languageViewData = computed<RadioGroupViewData<LanguageSetting>>(() => {
    const selectedOption = this.languageStore.draftedState.selectedOption();
    const settings = Object.values(LANGUAGE_SETTINGS_METADATA).map((option) => ({
      ...option,
      checked: option.settingName === selectedOption,
    }));

    return {
      title: LANGUAGE_SETTINGS_TITLE,
      settings,
      feedbackData: { feedbackType: 'language', payload: selectedOption },
    };
  });

  languageTranslations = LANGUAGE_TRANSLATIONS;

  languageSettingSwitcher(option: string) {
    if (this.isSettingKey(option, LANGUAGE_SETTINGS_METADATA))
      this.languageStore.updateSelectedOption(option);
  }

  isSettingKey<TRecord extends object>(
    key: string,
    record: TRecord,
  ): key is Extract<keyof TRecord, string> {
    return Object.hasOwn(record, key);
  }

  // don't deleted before revision
  // currentTime = signal<Date>(new Date());

  // dateFormatter = computed<string>(() => {
  //   const locale = this.selectedLanguage() === 'arabic' ? 'ar-EG-u-nu-latn' : 'en-GB-u-nu-latn';
  //   return new Intl.DateTimeFormat(locale, {
  //     year: 'numeric',
  //     month: 'numeric',
  //     day: 'numeric',
  //   }).format(this.currentTime());
  // });

  // constructor(private destroyRef: DestroyRef) {
  //   afterNextRender(() => {
  //     const intervalHandler = setInterval(() => {
  //       this.currentTime.set(new Date());
  //     }, 3_600_000);
  //     this.destroyRef.onDestroy(() => {
  //       clearInterval(intervalHandler);
  //     });
  //   });
  // }

  // getLang(lang: string): string {
  //   if (lang === 'arabic') {
  //     return 'العربية';
  //   }
  //   return `${lang[0].toUpperCase()}${lang.slice(1)}`;
  // }
}
