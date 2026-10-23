import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface TextSizeSetting {
  textSizePercent: number;
}
export interface LineHeightSetting {
  lineHeightPercent: number;
}
export interface ReadabilitySettingsMetaData {
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
