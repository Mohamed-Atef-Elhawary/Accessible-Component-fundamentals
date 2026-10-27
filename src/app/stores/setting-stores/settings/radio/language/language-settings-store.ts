import {
  LanguageSetting,
  RadioGroupState,
} from '../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { LanguageSettingsService } from '../../../../../services/disclosure-services/setting-services/radio/language-settings-service/language-settings-service';
import { buildRadioSettingsStore } from '../../../factories/radio-settings-store-factory/radio-settings-store-factory';

const initialState: RadioGroupState<LanguageSetting> = {
  selectedOption: 'english',
};

export const LanguageSettingsStore = buildRadioSettingsStore<LanguageSetting>(
  initialState,
  LanguageSettingsService,
);
