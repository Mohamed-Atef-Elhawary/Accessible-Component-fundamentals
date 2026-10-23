import { Component, computed, inject } from '@angular/core';
import {
  ToggleSettingMetaData,
  NotificationSettingName,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import {
  NotificationSettingsStore,
  NOTIFICATION_SETTINGS_METADATA,
} from '../../../../../stores/setting-stores/settings/toggle-settings-stores/notification-settings-store/notification-settings-store';
import { ToggleSettingsListComponent } from '../../shared/toggle/toggle-settings-list-component/toggle-settings-list-component';

@Component({
  imports: [ToggleSettingsListComponent],
  selector: 'app-notification-settings-component',
  styleUrl: './notification-settings-component.css',
  templateUrl: './notification-settings-component.html',
})
export class NotificationSettingsComponent {
  notificationStore = inject(NotificationSettingsStore);
  notificationSettings = computed<ToggleSettingMetaData<NotificationSettingName>[]>(() => {
    const isEmailChecked = this.notificationStore.draftedState.email();
    const isPushChecked = this.notificationStore.draftedState.push();

    const email: ToggleSettingMetaData<NotificationSettingName> = {
      ...NOTIFICATION_SETTINGS_METADATA.email,
      checked: isEmailChecked,
      preview: {
        feedbackType: 'status',
        payload: `Email notifications turned ${isEmailChecked ? 'on' : 'off'}`,
      },
    };
    const push: ToggleSettingMetaData<NotificationSettingName> = {
      ...NOTIFICATION_SETTINGS_METADATA.push,
      checked: isPushChecked,
      preview: {
        feedbackType: 'status',
        payload: `Push notifications turned ${isPushChecked ? 'on' : 'off'}`,
      },
    };
    return [email, push];
  });

  notificationSettingsToggler(settingName: string) {
    if (this.isSettingName<NotificationSettingName>(settingName, ['email', 'sms'])) {
      this.notificationStore.toggleSettingState(settingName);
    }
  }

  isSettingName<TName extends string>(
    settingName: string,
    availableNames: string[],
  ): settingName is TName {
    return availableNames.includes(settingName);
  }
}
