import {
  AccessibilitySetting,
  ToggleSettingsState,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { AccessibilitySettingsService } from '../../../../../services/setting-services/toggle/accessibility-settings-service/accessibility-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle-settings-store.factory/toggle-settings-store.factory';

const initialState: ToggleSettingsState<AccessibilitySetting> = {
  motion: false,
  contrast: false,
};

export const AccessibilitySettingsStore = buildToggleSettingsStore<AccessibilitySetting>(
  AccessibilitySettingsService,
  initialState,
);
