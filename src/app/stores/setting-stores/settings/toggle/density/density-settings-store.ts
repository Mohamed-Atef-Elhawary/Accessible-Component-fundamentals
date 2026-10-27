import {
  DensitySetting,
  ToggleSettingsState,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { DensitySettingsService } from '../../../../../services/setting-services/toggle/density-settings-service/density-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle-settings-store.factory/toggle-settings-store.factory';

const initialState: ToggleSettingsState<DensitySetting> = { compact: false };

export const DensitySettingsStore = buildToggleSettingsStore<DensitySetting>(
  DensitySettingsService,
  initialState,
);
