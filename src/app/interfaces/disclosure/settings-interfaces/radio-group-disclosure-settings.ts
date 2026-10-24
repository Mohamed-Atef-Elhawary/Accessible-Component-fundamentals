import { IconDefinition } from '@fortawesome/angular-fontawesome';

export type Theme = 'system' | 'light' | 'dark';

export type PrivacyOption = 'public' | 'friends' | 'private';

export interface DisplaySettingValue {
  selectedOption: Theme;
}

export interface DisplaySettingsState {
  draftedState: DisplaySettingValue;
  savedState: DisplaySettingValue;
}

export interface PrivacySettingsValue {
  selectedOption: PrivacyOption;
}

export interface PrivacySettingsState {
  draftedState: PrivacySettingsValue;
  savedState: PrivacySettingsValue;
}

export interface PrivacySettingsData {
  option: PrivacyOption;
  icon: IconDefinition;
}

export type RadioGroup = PrivacyOption | Theme;
export type RadioGroupName = 'privacy' | 'theme';

export interface RadioSettingsGroup<TSetting> {
  option: TSetting;
  name: RadioGroupName;
  checked: boolean;
  icon: IconDefinition;
}

export interface RadioSettingsData<TSetting extends string> {
  title: string;
  settings: RadioSettingsGroup<TSetting>[];
}
