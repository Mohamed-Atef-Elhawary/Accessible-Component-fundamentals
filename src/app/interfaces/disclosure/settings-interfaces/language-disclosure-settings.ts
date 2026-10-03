export type Language = 'arabic' | 'english';
export type Direction = 'rtl' | 'ltr';

export interface LanguageSettingsState {
  selectedLanguage: Language;
}

export interface LanguageSettingsData {
  name: 'language';
  value: Language;
  checked: boolean;
}

export interface LanguageSettingsText {
  direction: Direction;
  langTitle: string;
  notificationText: string;
  dateTitle: string;
}
