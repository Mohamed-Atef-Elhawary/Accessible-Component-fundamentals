import {
  RadioSettingsMetaData,
  ThemeSetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { faDisplay, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const THEME_SETTINGS_METADATA: RadioSettingsMetaData<ThemeSetting> = {
  system: {
    settingName: 'system',
    groupName: 'theme',
    icon: faDisplay,
  },
  light: {
    settingName: 'system',
    groupName: 'theme',
    icon: faSun,
  },
  dark: {
    settingName: 'system',
    groupName: 'theme',
    icon: faMoon,
  },
};
