import {
  AccessibilitySettingName,
  ToggleSettingMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

export const ACCESSIBILITY_SETTINGS_METADATA: Record<
  AccessibilitySettingName,
  Omit<ToggleSettingMetaData<AccessibilitySettingName>, 'checked' | 'feedbackData'>
> = {
  motion: {
    settingName: 'motion',
    description: 'Turns off animations and transitions throughout the app.',
    label: 'Reduce Motion',
  },
  contrast: {
    settingName: 'contrast',
    description: 'Increases color contrast to make text and controls easier to see.',
    label: 'High Contrast',
  },
};
