import { FeedbackData, FeedbackPosition } from '../global-interfaces/global-settings';

export type NotificationSetting = 'email' | 'push';
export type AccessibilitySetting = 'motion' | 'contrast';
export type DensitySetting = 'compact';

export type ToggleSettingOptions = NotificationSetting | AccessibilitySetting | DensitySetting;

export type ToggleSettingsState<TOption extends ToggleSettingOptions> = {
  [K in TOption]: boolean;
};

export type ToggleMetaDataOf<TOption extends ToggleSettingOptions> = {
  settingName: TOption;
  description: string;
  label: string;
};

export type ToggleMetaData<TOption extends ToggleSettingOptions> = {
  [K in TOption]: ToggleMetaDataOf<TOption>;
};
export type ToggleSettingViewData<TOption extends ToggleSettingOptions> =
  ToggleMetaDataOf<TOption> & {
    checked: boolean;
    feedbackData: FeedbackData;
  };

export type PositionedToggleSettingViewData<TOption extends ToggleSettingOptions> =
  ToggleSettingViewData<TOption> & {
    feedbackPosition: FeedbackPosition;
  };
