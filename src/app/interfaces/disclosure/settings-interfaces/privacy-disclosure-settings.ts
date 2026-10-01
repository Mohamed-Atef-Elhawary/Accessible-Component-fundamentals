export type PrivacyOption = 'public' | 'friends' | 'private';

export interface PrivacySettingsState {
  selectedOption: PrivacyOption;
}
