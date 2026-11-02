import {
  NotificationSetting,
  ToggleMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

export const NOTIFICATION_SETTINGS_METADATA: ToggleMetaData<NotificationSetting> = {
  email: {
    settingName: 'email',
    description: 'Receive updates and alerts via email.',
    label: 'Email Notification',
  },
  push: {
    settingName: 'push',
    description: 'Get real-time alerts sent directly to your device.',
    label: 'Push Notification',
  },
};
