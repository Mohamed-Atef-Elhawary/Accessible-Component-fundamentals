import { IconDefinition } from '@fortawesome/angular-fontawesome';

export type PrivacyOption = 'public' | 'friends' | 'private';

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
