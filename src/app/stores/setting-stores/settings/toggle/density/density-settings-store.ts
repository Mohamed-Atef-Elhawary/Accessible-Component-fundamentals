import {
  DensitySetting,
  ToggleSettingsState,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { DensitySettingsService } from '../../../../../services/disclosure-services/setting-services/toggle/density-settings-service/density-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle/toggle-settings-store.factory';

const initialState: ToggleSettingsState<DensitySetting> = { compact: false };

export const DensitySettingsStore = buildToggleSettingsStore<DensitySetting>(
  DensitySettingsService,
  initialState,
);
