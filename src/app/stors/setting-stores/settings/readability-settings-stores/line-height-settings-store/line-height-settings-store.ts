import {
  LineHeightSettingsState,
  ReadabilitySettingsText,
} from '../../../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';
import { LineHeightSettingsService } from '../../../../../services/setting-services/line-height-settings-service/line-height-settings-service';
import { buildReadabilitySettingsStore } from '../../../factories/text-size-and-line-height/readability-settings-store.factory';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const initialState: LineHeightSettingsState = { lineHeightPercent: 150 };
export const LineHeightSettingsStore = buildReadabilitySettingsStore<LineHeightSettingsState>(
  LineHeightSettingsService,
  initialState,
);

export const LINE_HEIGHT_SETTINGS_METADATA: Omit<ReadabilitySettingsText, 'settingRangeValue'> = {
  previewTitle: 'Line height preview',
  previewDescription:
    'This paragraph shows how the spacing between lines changes as the line height setting is adjusted, making longer text easier to scan.',
  settingTitle: 'Line height',
  settingSubtitle: 'Spacing between lines of text throughout the app',
  cssProperty: 'lineHeight',
  min: 100,
  max: 200,
  icon: faBars,
};
