import { faEarthAfrica, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import {
  LanguageSetting,
  RadioSettingsMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

export const Language_SETTINGS_METADATA: RadioSettingsMetaData<LanguageSetting> = {
  arabic: {
    settingName: 'arabic',
    groupName: 'language',
    icon: faEarthAfrica,
  },
  english: {
    settingName: 'english',
    groupName: 'language',
    icon: faEarthAmericas,
  },
};

// export const langFeed={
//        arabic:{
//           direction: 'rtl',
//           langTitle: 'اللغة',
//           notificationText:
//             'يتغير اتجاه النص وتخطيط الصفحة في جميع أنحاء التطبيق تبعًا للغة المختارة.',
//           dateTitle: 'تنسيق التاريخ',
//         },

//       english: {
//         direction: 'ltr',
//         langTitle: 'language',
//         notificationText: `Text direction and page layout change throughout the application based on the selected language.`,
//         dateTitle: 'Date format',
//       }
// }
