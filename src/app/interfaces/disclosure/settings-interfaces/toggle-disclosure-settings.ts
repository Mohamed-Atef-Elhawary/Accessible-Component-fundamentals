export type NotificationSettingName = 'email' | 'push';
export type AccessibilitySettingName = 'motion' | 'contrast';

export type ToggleSettingsState<TName extends string> = {
  [K in TName]: boolean;
};

type FeadbackType = 'statusText' | 'microPreview' | 'motionDemo';

export interface ToggleSettingMetaData<TName extends string> {
  settingName: TName;
  description: string;
  checked: boolean;
  label: string;
  feadbackType?: FeadbackType;
}
