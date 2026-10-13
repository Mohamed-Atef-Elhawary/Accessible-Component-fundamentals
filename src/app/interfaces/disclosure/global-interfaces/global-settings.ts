import { Theme } from '../settings-interfaces/display-disclosure-settings';

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
  appearance: Theme;
};

export type FeedbackType = keyof FeedbackPayloadMap;

export type FeedbackDataOf<TKey extends FeedbackType> = {
  feedbackType: TKey;
  payload: FeedbackPayloadMap[TKey];
};

export type FeedbackData = {
  [TKey in FeedbackType]: FeedbackDataOf<TKey>;
}[FeedbackType];
