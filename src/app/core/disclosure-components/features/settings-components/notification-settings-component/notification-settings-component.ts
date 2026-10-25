import { Component, computed, inject } from '@angular/core';
import {
  NotificationSettingName,
  ToggleSettingData,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { NotificationSettingsStore } from '../../../../../stores/setting-stores/settings/toggle/notification/notification-settings-store';
import { ToggleSettingsListComponent } from '../../shared/toggle/toggle-settings-list-component/toggle-settings-list-component';
import { NOTIFICATION_SETTINGS_METADATA } from '../../../../../stores/setting-stores/settings/toggle/notification/notification-constants';

@Component({
  imports: [ToggleSettingsListComponent],
  selector: 'app-notification-settings-component',
  styleUrl: './notification-settings-component.css',
  templateUrl: './notification-settings-component.html',
})
export class NotificationSettingsComponent {
  notificationStore = inject(NotificationSettingsStore);
  notificationSettings = computed<ToggleSettingData<NotificationSettingName>[]>(() => {
    const isEmailChecked = this.notificationStore.draftedState.email();
    const isPushChecked = this.notificationStore.draftedState.push();

    const email: ToggleSettingData<NotificationSettingName> = {
      ...NOTIFICATION_SETTINGS_METADATA.email,
      checked: isEmailChecked,
      feedbackData: {
        feedbackType: 'status',
        payload: `Email notifications turned ${isEmailChecked ? 'on' : 'off'}`,
      },
    };
    const push: ToggleSettingData<NotificationSettingName> = {
      ...NOTIFICATION_SETTINGS_METADATA.push,
      checked: isPushChecked,
      feedbackData: {
        feedbackType: 'status',
        payload: `Push notifications turned ${isPushChecked ? 'on' : 'off'}`,
      },
    };
    return [email, push];
  });

  notificationSettingsToggler(settingName: string) {
    if (this.isSettingKey(settingName, NOTIFICATION_SETTINGS_METADATA)) {
      this.notificationStore.toggleSettingState(settingName);
    }
  }
  isSettingKey<TRecord extends object>(
    key: string,
    record: TRecord,
  ): key is Extract<keyof TRecord, string> {
    return record.hasOwnProperty(key);
  }
}
