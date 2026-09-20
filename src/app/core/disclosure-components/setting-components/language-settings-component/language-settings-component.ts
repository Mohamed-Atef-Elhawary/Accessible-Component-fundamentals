import { afterNextRender, Component, computed, DestroyRef, signal } from '@angular/core';
import { Language } from '../../../../interfaces/disclosure-settings';
import { SelectedLanguage } from '../../../../types/generalTypes';

@Component({
  imports: [],
  selector: 'app-language-settings-component',
  styleUrl: './language-settings-component.css',
  templateUrl: './language-settings-component.html',
  host: { class: 'block' },
})
export class LanguageSettingsComponent {
  selectedLanguage = signal<SelectedLanguage>('arabic');
  direction = computed<string>(() => (this.selectedLanguage() === 'arabic' ? 'rtl' : 'ltr'));
  settingData = computed<{ langTitle: string; text: string; dateTitle: string }>(() => {
    if (this.selectedLanguage() === 'arabic') {
      return {
        langTitle: 'اللغة',
        text: 'يتغير اتجاه النص وتخطيط الصفحة في جميع أنحاء التطبيق تبعًا للغة المختارة.',
        dateTitle: 'تنسيق التاريخ',
      };
    }
    return {
      langTitle: 'Langauge',
      text: `Text direction and page layout change throughout the application based on the selected language.`,
      dateTitle: 'Date format',
    };
  });

  currentTime = signal<Date>(new Date());

  dateFormatter = computed<string>(() => {
    const locale = this.selectedLanguage() === 'arabic' ? 'ar-EG-u-nu-latn' : 'en-GB-u-nu-latn';
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).format(this.currentTime());
  });

  languages: Language[] = [
    {
      id: crypto.randomUUID(),
      name: 'language',
      value: 'arabic',
      checked: signal<boolean>(this.selectedLanguage() === 'arabic'),
    },
    {
      id: crypto.randomUUID(),
      name: 'language',
      value: 'english',
      checked: signal<boolean>(this.selectedLanguage() === 'english'),
    },
  ];
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

  getDate(): Date {
    return new Date();
  }

  onChange(newLanguage: SelectedLanguage) {
    this.selectedLanguage.set(newLanguage);
  }
}
