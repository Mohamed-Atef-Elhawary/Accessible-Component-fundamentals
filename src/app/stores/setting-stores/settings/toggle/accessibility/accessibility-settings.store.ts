import {
  AccessibilitySetting,
  ToggleSettingsState,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { AccessibilitySettingsService } from '../../../../../services/disclosure-services/setting-services/toggle/accessibility-settings-service/accessibility-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle/toggle-settings-store.factory';

const initialState: ToggleSettingsState<AccessibilitySetting> = {
  motion: false,
  contrast: false,
};

export const AccessibilitySettingsStore = buildToggleSettingsStore<AccessibilitySetting>(
  AccessibilitySettingsService,
  initialState,
);
