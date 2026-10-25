import { FeedbackData, FeedbackPosition } from '../global-interfaces/global-settings';

export type NotificationSettingName = 'email' | 'push';
export type AccessibilitySettingName = 'motion' | 'contrast';
export type DensitySettingName = 'compact';

export type ToggleSettingName =
  | NotificationSettingName
  | AccessibilitySettingName
  | DensitySettingName;

export type ToggleSettingsState<TName extends ToggleSettingName> = {
  [K in TName]: boolean;
};

export type ToggleMetaDataOf<TName extends ToggleSettingName> = {
  settingName: TName;
  description: string;
  label: string;
};

export type ToggleMetaData<TName extends ToggleSettingName> = {
  [K in TName]: ToggleMetaDataOf<TName>;
};
export type ToggleSettingData<TName extends ToggleSettingName> = ToggleMetaDataOf<TName> & {
  checked: boolean;
  feedbackData: FeedbackData;
};

export type PositionedToggleSettingData<TName extends ToggleSettingName> =
  ToggleSettingData<TName> & {
    feedbackPosition: FeedbackPosition;
  };
