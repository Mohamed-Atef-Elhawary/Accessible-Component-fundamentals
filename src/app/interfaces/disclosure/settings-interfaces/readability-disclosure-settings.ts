import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface TextSizeSettingsState {
  textSizePercent: number;
}
export interface LineHeightSettingsState {
  lineHeightPercent: number;
}
export interface ReadabilitySettingsText {
  settingRangeValue: number;
  previewTitle: string;
  previewDescription: string;
  settingTitle: string;
  settingSubtitle: string;
  cssProperty: string;
  min: number;
  max: number;
  icon: IconDefinition;
}
