import {
  ReadabilitySettingsMetaData,
  TextSizeSetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';
import { TextSizeSettingsService } from '../../../../../services/disclosure-services/setting-services/text-size-settings-service/text-size-settings-service';
import { buildReadabilitySettingsStore } from '../../../factories/readability/readability-settings-store.factory';
import { faA } from '@fortawesome/free-solid-svg-icons';

const initialState: TextSizeSetting = { textSizePercent: 100 };
export const TextSizeSettingsStore = buildReadabilitySettingsStore<TextSizeSetting>(
  TextSizeSettingsService,
  initialState,
);

export const TEXT_SIZE_SETTINGS_METADATA: Omit<ReadabilitySettingsMetaData, 'settingRangeValue'> = {
  previewTitle: 'Text size preview',
  previewDescription:
    'The size of these words will change as you adjust the slider. Changes you make here will apply to most of the text on your device.',
  settingTitle: 'Text size',
  settingSubtitle: 'Text size that appears throughout the app',
  cssProperty: 'fontSize',
  min: 100,
  max: 200,
  icon: faA,
};
