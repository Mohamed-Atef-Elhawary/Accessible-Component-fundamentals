import { IconDefinition } from '@fortawesome/angular-fontawesome';

export type PrivacyOption = 'public' | 'friends' | 'private';

export interface PrivacySettingsState {
  selectedOption: PrivacyOption;
}

export interface PrivacySettingsData {
  option: PrivacyOption;
  icon: IconDefinition;
}
