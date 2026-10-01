export interface SettingsService<TName> {
  loadSettings(): Promise<TName>;
  saveSettings(settingState: TName): Promise<void>;
}
