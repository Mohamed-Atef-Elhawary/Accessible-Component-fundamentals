import { afterNextRender, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { languageSettingsStore } from '../../../../stors/setting-stores/language-settings-store/language-settings-store';
import { Language } from '../../../../interfaces/disclosure/settings-interfaces/language-disclosure-settings';

@Component({
  imports: [],
  selector: 'app-language-settings-component',
  styleUrl: './language-settings-component.css',
  templateUrl: './language-settings-component.html',
})
export class LanguageSettingsComponent {
  languageStore = inject(languageSettingsStore);

  selectedLanguage = computed(() => this.languageStore.selectedLanguage());
  languageDataList = computed(() => this.languageStore.languageDataList());

  languageSettingsText = computed(() => this.languageStore.languageSettingsText());

  currentTime = signal<Date>(new Date());

  dateFormatter = computed<string>(() => {
    const locale = this.selectedLanguage() === 'arabic' ? 'ar-EG-u-nu-latn' : 'en-GB-u-nu-latn';
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).format(this.currentTime());
  });

  constructor(private destroyRef: DestroyRef) {
    afterNextRender(() => {
      const intervalHandler = setInterval(() => {
        this.currentTime.set(new Date());
      }, 3_600_000);
      this.destroyRef.onDestroy(() => {
        clearInterval(intervalHandler);
      });
    });
  }

  getLang(lang: string): string {
    if (lang === 'arabic') {
      return 'العربية';
    }
    return `${lang[0].toUpperCase()}${lang.slice(1)}`;
  }

  onChange(language: Language) {
    this.languageStore.switchLanguageState(language);
  }
}
