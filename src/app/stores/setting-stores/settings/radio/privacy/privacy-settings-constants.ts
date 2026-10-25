import { faGlobe, faLock, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import {
  PrivacySetting,
  RadioSettingsMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

export const PRIVACY_SETTINGS_METADATA: RadioSettingsMetaData<PrivacySetting> = {
  public: {
    settingName: 'public',
    groupName: 'privacy',
    icon: faGlobe,
  },
  friends: {
    settingName: 'friends',
    groupName: 'privacy',
    icon: faUserGroup,
  },
  private: {
    settingName: 'private',
    groupName: 'privacy',
    icon: faLock,
  },
};
