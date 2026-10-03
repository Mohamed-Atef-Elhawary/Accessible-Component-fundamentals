export interface SettingsService<TState> {
  loadSettings(): Promise<TState>;
  saveSettings(settingState: TState): Promise<void>;
}
