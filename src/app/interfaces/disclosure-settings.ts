import { Signal } from '@angular/core';
import { PreferredTheme } from '../types/generalTypes';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface SettingList {
  id: string;
  label: string;
  checked: Signal<boolean>;
}
export interface Appearance {
  id: string;
  name: string;
  value: PreferredTheme;
  icon: IconDefinition;
  checked: Signal<boolean>;
}
