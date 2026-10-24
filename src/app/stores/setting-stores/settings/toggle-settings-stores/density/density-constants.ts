import {
  DensitySettingName,
  ToggleSettingMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

export const COMPACT_SETTINGS_METADATA: Record<
  DensitySettingName,
  Omit<ToggleSettingMetaData<DensitySettingName>, 'checked' | 'feedbackData'>
> = {
  compact: {
    settingName: 'compact',
    label: 'Compact spacing',
    description: 'Reduces spacing and padding to fit more content on screen.',
  },
};
