import {
  Component,
  inject,
  computed,
  signal,
  DestroyRef,
  afterNextRender,
  viewChild,
  ElementRef,
  afterEveryRender,
} from '@angular/core';
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
  constructor() {
    afterNextRender(() => {
      const root: HTMLElement = document.documentElement;
      const culprits: HTMLElement[] = [];

      document.querySelectorAll<HTMLElement>('body *').forEach((el: HTMLElement) => {
        const oldDisplay: string = el.style.display;
        el.style.display = 'none';
        if (root.scrollHeight <= root.clientHeight) {
          culprits.push(el);
        }
        el.style.display = oldDisplay;
      });

      const deepest: string[] = culprits
        .filter((a: HTMLElement) => !culprits.some((b: HTMLElement) => b !== a && a.contains(b)))
        .map((e: HTMLElement) => `${e.tagName}.${String(e.className).slice(0, 50)}`);

      // console.log(deepest);
    });
  }
}
