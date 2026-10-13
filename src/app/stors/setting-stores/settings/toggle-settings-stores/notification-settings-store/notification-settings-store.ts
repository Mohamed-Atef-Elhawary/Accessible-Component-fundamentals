import {
  ToggleSettingsState,
  NotificationSettingName,
  ToggleSettingMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { NotificationSettingsService } from '../../../../../services/setting-services/notification-settings-service/notification-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle-settings-store.factory/toggle-settings-store.factory';

const initialState: ToggleSettingsState<NotificationSettingName> = { email: false, push: false };
export const NotificationSettingsStore = buildToggleSettingsStore<NotificationSettingName>(
  NotificationSettingsService,
  initialState,
);

export const NOTIFICATION_SETTINGS_METADATA: Record<
  NotificationSettingName,
  Omit<ToggleSettingMetaData<NotificationSettingName>, 'checked' | 'preview'>
> = {
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
