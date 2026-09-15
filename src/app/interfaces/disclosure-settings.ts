import { Signal } from '@angular/core';
import { LanguageSelect, PreferredTheme } from '../types/generalTypes';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface SettingList {
  id: string;
  label: string;
  checked: Signal<boolean>;
}

export interface GeneralDisclosureSettings {
  id: string;
  name: string;
  checked: Signal<boolean>;
}
export interface Appearance extends GeneralDisclosureSettings {
  value: PreferredTheme;
  icon: IconDefinition;
}
export interface Language extends GeneralDisclosureSettings {
  value: LanguageSelect;
}
