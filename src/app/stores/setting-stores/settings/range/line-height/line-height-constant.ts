import { faBars } from '@fortawesome/free-solid-svg-icons';
import { RangeSettingMetaData } from '../../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';

export const LINE_HEIGHT_SETTING_METADATA: RangeSettingMetaData = {
  title: 'Spacing',
  description: 'Adjust the space between lines to make long text easier to read.',
  min: 100,
  max: 200,
  icon: faBars,
};
// export const LINE_HEIGHT_SETTINGS_METADATA: Omit<ReadabilitySettingsMetaData, 'settingRangeValue'> =
//   {
//     previewTitle: 'Live preview',
//     previewDescription:
//       'Sample text: the space between these lines will change as you move the slider.',

//   };
