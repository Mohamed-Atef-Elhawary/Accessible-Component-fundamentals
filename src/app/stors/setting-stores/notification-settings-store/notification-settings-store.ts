import {
  ToggleSettingsState,
  NotificationSettingName,
  ToggleSettingMetaData,
} from '../../../interfaces/disclosure/toggle-disclosure-settings';
import { NotificationSettingsService } from '../../../services/setting-services/notification-settings-service/notification-settings-service';
import { createToggleSettingsStore } from '../factories/toggle-settings-store.factory';

const initialState: ToggleSettingsState<NotificationSettingName> = { email: false, push: false };
export const notificationSettingsStore = createToggleSettingsStore<NotificationSettingName>(
  NotificationSettingsService,
  initialState,
);

export const NOTIFICATION_SETTINGS_METADATA: Record<
  NotificationSettingName,
  Omit<ToggleSettingMetaData<NotificationSettingName>, 'checked'>
> = {
  email: { settingName: 'email', id: 'emailNotification', label: 'Email Notification' },
  push: { settingName: 'push', id: 'pushNotification', label: 'Push Notification' },
};
