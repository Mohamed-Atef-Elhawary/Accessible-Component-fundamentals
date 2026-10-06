import {
  CompactSettingName,
  ToggleSettingMetaData,
  ToggleSettingsState,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { CompactSettingsService } from '../../../../../services/setting-services/compact-settings-service/compact-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle-settings-store.factory/toggle-settings-store.factory';

const initialState: ToggleSettingsState<CompactSettingName> = { compact: false };

export const CompactSettingsStore = buildToggleSettingsStore<CompactSettingName>(
  CompactSettingsService,
  initialState,
);

export const COMPACT_SETTINGS_METADATA: Record<
  CompactSettingName,
  Omit<ToggleSettingMetaData<CompactSettingName>, 'checked'>
> = {
  compact: {
    settingName: 'compact',
    feedback: 'compact',
    label: 'Compact spacing',
    description: 'Reduces spacing and padding to fit more content on screen.',
  },
};
