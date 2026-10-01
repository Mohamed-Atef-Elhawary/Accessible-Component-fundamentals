import {
  AccessibilitySettingName,
  ToggleSettingMetaData,
  ToggleSettingsState,
} from '../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { AccessibilitySettingsService } from '../../../services/setting-services/accessibility-settings-service/accessibility-settings-service';
import { createToggleSettingsStore } from '../factories/toggle-settings-store.factory';

const initialState: ToggleSettingsState<AccessibilitySettingName> = {
  motion: false,
  contrast: false,
};

export const accessibilitySettingsStore = createToggleSettingsStore<AccessibilitySettingName>(
  AccessibilitySettingsService,
  initialState,
);

export const ACCESSIBILITY_SETTINGS_METADATA: Record<
  AccessibilitySettingName,
  Omit<ToggleSettingMetaData<AccessibilitySettingName>, 'checked'>
> = {
  motion: { settingName: 'motion', id: 'reduceMotion', label: 'Reduce Motion' },
  contrast: { settingName: 'contrast', id: 'highcontrast', label: 'High Contrast' },
};
