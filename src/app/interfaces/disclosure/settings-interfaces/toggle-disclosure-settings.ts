import { FeedbackType } from '../global-interfaces/global-settings';

export type NotificationSettingName = 'email' | 'push';
export type AccessibilitySettingName = 'motion' | 'contrast';
export type CompactSettingName = 'compact';
export type ToggleSettingsState<TName extends string> = {
  [K in TName]: boolean;
};
export type FeedbackSettingsState<TName extends string> = {
  [K in TName]?: boolean;
};

export interface ToggleSettingMetaData<TName extends string> {
  settingName: TName;
  feedback: FeedbackType;
  feedbackMessage?: string;
  description: string;
  checked: boolean;
  label: string;
}
