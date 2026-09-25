import { IconDefinition } from '@fortawesome/angular-fontawesome';

export type Theme = 'system' | 'light' | 'dark';

export interface AppearanceData {
  name: 'appearance';
  value: Theme;
  checked: boolean;
  icon: IconDefinition;
}

export interface DisplaySettingState {
  appearance: Theme;
  compact: boolean;
}

export interface DisplayService {
  loadSettings(): Promise<DisplaySettingState>;
  saveSettings(displaySettingState: DisplaySettingState): Promise<void>;
}
