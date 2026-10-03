import {
  AccessibilitySettingName,
  ToggleSettingMetaData,
  ToggleSettingsState,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { AccessibilitySettingsService } from '../../../../../services/setting-services/accessibility-settings-service/accessibility-settings-service';
import { buildToggleSettingsStore } from '../../../factories/notification-and-accessibility/toggle-settings-store.factory';

const initialState: ToggleSettingsState<AccessibilitySettingName> = {
  motion: false,
  contrast: false,
};

export const accessibilitySettingsStore = buildToggleSettingsStore<AccessibilitySettingName>(
  AccessibilitySettingsService,
  initialState,
);

export const ACCESSIBILITY_SETTINGS_METADATA: Record<
  AccessibilitySettingName,
  Omit<ToggleSettingMetaData<AccessibilitySettingName>, 'checked'>
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
