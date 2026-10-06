export type FeedbackType = 'status' | 'motion' | 'contrast' | 'compact' | 'appearance';

export type FeedbackData<TPayload> = {
  feedback: FeedbackType;
  payload: TPayload;
};
export interface SettingsService<TState> {
  loadSettings(): Promise<TState>;
  saveSettings(settingState: TState): Promise<void>;
}
