import { LanguageSetting } from '../../../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
type Lang = 'ar' | 'en';
type Dir = 'rtl' | 'ltr';
interface LanguageTranslations {
  lang: Lang;
  title: string;
  subTitle: string;
  dir: Dir;
  greeting: string;
  dateFormat: string;
  timeFormat: string;
  description: string;
}

export interface FormattedDateTime {
  formattedDate: string;
  formattedTime: string;
}
export const LANGUAGE_TRANSLATIONS: Record<LanguageSetting, LanguageTranslations> = {
  arabic: {
    lang: 'ar',
    title: 'العربية',
    subTitle: 'اللغة',
    dir: 'rtl',
    greeting: 'مرحبا',
    dateFormat: 'تنسيق التاريخ',
    timeFormat: 'الوقت',
    description: 'يتغير اتجاه النص وتخطيط الصفحة في جميع أنحاء التطبيق تبعًا للغة المختارة.',
  },
  english: {
    lang: 'en',
    title: 'English',
    subTitle: 'Language',
    dir: 'ltr',
    greeting: 'Hello',
    dateFormat: 'Date format',
    timeFormat: 'Time',
    description:
      'Text direction and page layout change throughout the application based on the selected language.',
  },
};
