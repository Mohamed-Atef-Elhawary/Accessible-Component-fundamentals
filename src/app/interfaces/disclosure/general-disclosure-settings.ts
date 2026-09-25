import { Signal } from '@angular/core';
import { SelectedLanguage, PreferredTheme } from '../../types/generalTypes';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

/////////////////////////////////////////////////
export interface GeneralDisclosureSettings {
  id: string;
  name: string;
  checked: Signal<boolean>;
}

export interface Language extends GeneralDisclosureSettings {
  value: SelectedLanguage;
}
