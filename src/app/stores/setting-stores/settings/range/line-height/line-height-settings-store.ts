import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  RangeState,
  LineHeightSetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';
import { LineHeightSettingsService } from '../../../../../services/disclosure-services/setting-services/range/line-height-settings-service/line-height-settings-service';
import { buildRangeSettingsStore } from '../../../factories/range/range-settings-store.factory';

const initialState: RangeState<LineHeightSetting> = { preferredPercent: 150 };
export const LineHeightSettingsStore = buildRangeSettingsStore(
  LineHeightSettingsService,
  initialState,
);
