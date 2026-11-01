import { faA } from '@fortawesome/free-solid-svg-icons';
import {
  RangeState,
  TextSizeSetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';
import { TextSizeSettingsService } from '../../../../../services/disclosure-services/setting-services/range/text-size-settings-service/text-size-settings-service';
import { buildRangeSettingsStore } from '../../../factories/range/range-settings-store.factory';

const initialState: RangeState<TextSizeSetting> = { preferredPercent: 100 };

export const TextSizeSettingsStore = buildRangeSettingsStore(TextSizeSettingsService, initialState);
