import {
  RadioGroupState,
  ThemeSetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { DisplaySettingsService } from '../../../../../services/disclosure-services/setting-services/radio/theme-settings-service/display-settings-service';
import { buildRadioSettingsStore } from '../../../factories/radio-settings-store-factory/radio-settings-store-factory';

const initialState: RadioGroupState<ThemeSetting> = {
  selectedOption: 'system',
};
export const ThemeSettingsStore = buildRadioSettingsStore<ThemeSetting>(
  initialState,
  DisplaySettingsService,
);
