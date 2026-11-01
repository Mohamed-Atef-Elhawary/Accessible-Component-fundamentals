import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { FeedbackData } from '../global-interfaces/global-settings';

export type TextSizeSetting = 'TextSize';
export type LineHeightSetting = 'LineHeight';

export type RangeSettingOptions = TextSizeSetting | LineHeightSetting;

type RangeSettingState<TRange extends RangeSettingOptions> = {
  [range in TRange]: {
    preferredPercent: number;
  };
};
export type RangeState<TRange extends RangeSettingOptions> = RangeSettingState<TRange>[TRange];

export type RangeSettingMetaData = {
  title: string;
  description: string;
  min: number;
  max: number;
  icon: IconDefinition;
};
export type RangeViewData = RangeSettingMetaData & {
  draftedPercent: number;
  feedbackData: FeedbackData;
};

// export interface ReadabilitySettingsMetaData {
//   settingRangeValue: number;
//   previewTitle: string;
//   previewDescription: string;
//   settingTitle: string;
//   settingSubtitle: string;
//   cssProperty: string;
//   min: number;
//   max: number;
//   icon: IconDefinition;
// }
// settingName: TOption;
// description: string;
// label: string;
