import {
  ToggleSettingsState,
  NotificationSetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { NotificationSettingsService } from '../../../../../services/disclosure-services/setting-services/toggle/notification-settings-service/notification-settings-service';
import { buildToggleSettingsStore } from '../../../factories/toggle/toggle-settings-store.factory';

const initialState: ToggleSettingsState<NotificationSetting> = { email: false, push: false };
export const NotificationSettingsStore = buildToggleSettingsStore<NotificationSetting>(
  NotificationSettingsService,
  initialState,
);
