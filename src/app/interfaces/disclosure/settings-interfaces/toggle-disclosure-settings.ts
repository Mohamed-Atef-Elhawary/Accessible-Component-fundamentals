import { FeedbackData, FeedbackPosition } from '../global-interfaces/global-settings';

export type NotificationSettingName = 'email' | 'push';
export type AccessibilitySettingName = 'motion' | 'contrast';
export type DensitySettingName = 'compact';

export type ToggleSettingName =
  | NotificationSettingName
  | AccessibilitySettingName
  | DensitySettingName;

export type ToggleSettingsState<TName extends string> = {
  [K in TName]: boolean;
};

export interface ToggleSettingMetaData<TName extends string> {
  settingName: TName;
  feedbackData: FeedbackData;
  description: string;
  checked: boolean;
  label: string;
}

export interface PositionedToggleSettingMetaData<
  TName extends string,
> extends ToggleSettingMetaData<TName> {
  feedbackPosition: FeedbackPosition;
}
