import {
  AccessibilitySettingName,
  ToggleSettingsState,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { AccessibilitySettingsService } from '../../../../../services/setting-services/accessibility-settings-service/accessibility-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle-settings-store.factory/toggle-settings-store.factory';

const initialState: ToggleSettingsState<AccessibilitySettingName> = {
  motion: false,
  contrast: false,
};

export const AccessibilitySettingsStore = buildToggleSettingsStore<AccessibilitySettingName>(
  AccessibilitySettingsService,
  initialState,
);
