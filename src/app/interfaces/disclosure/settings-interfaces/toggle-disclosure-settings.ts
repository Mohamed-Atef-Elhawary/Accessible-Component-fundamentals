import { FeedbackData, PreviewPosition } from '../global-interfaces/global-settings';

export type NotificationSettingName = 'email' | 'push';
export type AccessibilitySettingName = 'motion' | 'contrast';
export type CompactSettingName = 'compact';
export type ToggleSettingName =
  | NotificationSettingName
  | AccessibilitySettingName
  | CompactSettingName;
export type ToggleSettingsState<TName extends string> = {
  [K in TName]: boolean;
};
export type FeedbackSettingsState<TName extends string> = {
  [K in TName]?: boolean;
};

export interface ToggleSettingMetaData<TName extends string> {
  settingName: TName;
  preview: FeedbackData;
  description: string;
  checked: boolean;
  label: string;
}

export interface PositionedToggleSettingMetaData<
  TName extends string,
> extends ToggleSettingMetaData<TName> {
  previewPosition: PreviewPosition;
}
