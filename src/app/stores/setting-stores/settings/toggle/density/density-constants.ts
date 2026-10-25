import {
  DensitySettingName,
  ToggleMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

export const DENSITY_SETTINGS_METADATA: ToggleMetaData<DensitySettingName> = {
  compact: {
    settingName: 'compact',
    label: 'Compact spacing',
    description: 'Reduces spacing and padding to fit more content on screen.',
  },
};
