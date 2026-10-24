import {
  ToggleSettingsState,
  NotificationSettingName,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { NotificationSettingsService } from '../../../../../services/setting-services/notification-settings-service/notification-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle-settings-store.factory/toggle-settings-store.factory';

const initialState: ToggleSettingsState<NotificationSettingName> = { email: false, push: false };
export const NotificationSettingsStore = buildToggleSettingsStore<NotificationSettingName>(
  NotificationSettingsService,
  initialState,
);
