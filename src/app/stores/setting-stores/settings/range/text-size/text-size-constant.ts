import { faA } from '@fortawesome/free-solid-svg-icons';
import { RangeSettingMetaData } from '../../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';

export const TEXT_SIZE_SETTING_METADATA: RangeSettingMetaData = {
  title: 'Size',
  description: 'Make text larger or smaller across the app.',
  min: 100,
  max: 200,
  icon: faA,
};
