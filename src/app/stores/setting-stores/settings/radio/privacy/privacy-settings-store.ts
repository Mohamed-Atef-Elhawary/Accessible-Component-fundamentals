import {
  PrivacySetting,
  RadioGroupState,
} from '../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { PrivacySettingsService } from '../../../../../services/disclosure-services/setting-services/radio/privacy-settings-service/privacy-settings-service';
import { buildRadioSettingsStore } from '../../../factories/radio-settings-store-factory/radio-settings-store-factory';

const initialState: RadioGroupState<PrivacySetting> = {
  selectedOption: 'public',
};

export const PrivacySettingsStore = buildRadioSettingsStore<PrivacySetting>(
  initialState,
  PrivacySettingsService,
);
