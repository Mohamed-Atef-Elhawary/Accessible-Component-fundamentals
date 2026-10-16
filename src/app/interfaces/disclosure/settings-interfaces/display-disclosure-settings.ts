import { IconDefinition } from '@fortawesome/angular-fontawesome';

export type Theme = 'system' | 'light' | 'dark';

// export interface AppearanceData {
//   name: 'appearance';
//   value: Theme;
//   checked: boolean;
//   icon: IconDefinition;
// }
export interface DisplaySettingValue {
  selectedOption: Theme;
}

export interface DisplaySettingsState {
  draftedState: DisplaySettingValue;
  savedState: DisplaySettingValue;
}
