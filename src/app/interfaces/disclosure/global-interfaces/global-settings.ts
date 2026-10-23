import { Theme } from '../settings-interfaces/display-disclosure-settings';
import { PrivacyOption } from '../settings-interfaces/privacy-disclosure-settings';
import {
  LineHeightSetting,
  TextSizeSetting,
} from '../settings-interfaces/readability-disclosure-settings';

export interface SettingsService<TState> {
  loadSettings(): Promise<TState>;
  saveSettings(settingState: TState): Promise<void>;
}
export type PreviewPosition = 'top' | 'bottom';

export type FeedbackPayloadMap = {
  status: string;
  compact: boolean;
  motion: boolean;
  contrast: boolean;
  theme: Theme;
  privacy: PrivacyOption;
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
