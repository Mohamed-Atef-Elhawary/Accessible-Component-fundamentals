export type NotificationSettingName = 'email' | 'push';
export type AccessibilitySettingName = 'motion' | 'contrast';

export type ToggleSettingsState<TName extends string> = {
  [K in TName]: boolean;
};

export interface ToggleService<TName extends string> {
  loadSettings(): Promise<ToggleSettingsState<TName>>;
  saveSettings(settings: ToggleSettingsState<TName>): Promise<void>;
}

export interface ToggleSettingMetaData<TName extends string> {
  settingName: TName;
  id: string;
  checked: boolean;
  label: string;
}
