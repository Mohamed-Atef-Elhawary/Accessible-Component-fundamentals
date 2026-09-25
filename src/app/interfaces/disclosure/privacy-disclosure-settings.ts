export type PrivacyOption = 'public' | 'friends' | 'private';

export interface PrivacySettingsState {
  selectedOption: PrivacyOption;
}

export interface PrivacyService {
  loadSettings(): Promise<PrivacySettingsState>;
  saveSettings(privacySettingsState: PrivacySettingsState): Promise<void>;
}
