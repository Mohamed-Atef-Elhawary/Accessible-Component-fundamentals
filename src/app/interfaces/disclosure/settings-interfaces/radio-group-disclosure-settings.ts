import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { PrivacyOption } from './privacy-disclosure-settings';
import { Theme } from './display-disclosure-settings';

export type RadioGroup = PrivacyOption | Theme;

export interface RadioSettingsGroup<TSetting> {
  option: TSetting;
  checked: boolean;
  icon: IconDefinition;
}

export interface RadioSettingsData<TSetting extends string> {
  title: string;
  settings: RadioSettingsGroup<TSetting>[];
}
