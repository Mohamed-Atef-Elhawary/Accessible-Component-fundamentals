import {
  LanguageSetting,
  PrivacySetting,
  ThemeSetting,
} from '../settings-interfaces/radio-group-disclosure-settings';
import { NotificationSetting } from '../settings-interfaces/toggle-disclosure-settings';

export interface SettingsService<TState> {
  loadSettings(): Promise<TState>;
  saveSettings(settingState: TState): Promise<void>;
}
export type FeedbackPosition = 'top' | 'bottom';

export type NotificationPayload = {
  notificationSetting: NotificationSetting;
  enabled: boolean;
};

export type FeedbackPayloadMap = {
  email: NotificationPayload;
  push: NotificationPayload;
  compact: boolean;
  motion: boolean;
  contrast: boolean;
  theme: ThemeSetting;
  privacy: PrivacySetting;
  language: LanguageSetting;
  textSize: number;
  lineHeight: number;
};

export type FeedbackType = keyof FeedbackPayloadMap;

export type FeedbackDataOf<TKey extends FeedbackType> = {
  feedbackType: TKey;
  payload: FeedbackPayloadMap[TKey];
};

export type FeedbackData = {
  [TKey in FeedbackType]: FeedbackDataOf<TKey>;
}[FeedbackType];
