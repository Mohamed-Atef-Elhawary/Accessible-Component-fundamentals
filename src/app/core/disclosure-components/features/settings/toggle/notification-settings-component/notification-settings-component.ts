import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Signal,
} from '@angular/core';
import {
  NotificationSetting,
  ToggleMetaData,
  ToggleSettingOptions,
  ToggleSettingViewData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { NotificationSettingsStore } from '../../../../../../stores/setting-stores/settings/toggle/notification/notification-settings-store';
import { ToggleSettingsListComponent } from '../../../shared/toggle/toggle-settings-list-component/toggle-settings-list-component';
import { NOTIFICATION_SETTINGS_METADATA } from '../../../../../../stores/setting-stores/settings/toggle/notification/notification-constants';
import { FeedbackData } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';

@Component({
  imports: [ToggleSettingsListComponent],
  selector: 'app-notification-settings-component',
  styleUrl: './notification-settings-component.css',
  templateUrl: './notification-settings-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationSettingsComponent {
  notificationStore = inject(NotificationSettingsStore);

  private computedSettings: Signal<ToggleSettingViewData<NotificationSetting>>[] = Object.values(
    NOTIFICATION_SETTINGS_METADATA,
  ).map((option) => {
    return computed<ToggleSettingViewData<NotificationSetting>>(() => {
      const checked = this.notificationStore.draftedState[option.settingName]();
      const feedbackData: FeedbackData = {
        feedbackType: option.settingName,
        payload: {
          notificationSetting: option.settingName,
          enabled: checked,
        },
      };
      return {
        ...option,
        checked,
        feedbackData,
      };
    });
  });

  notificationViewData = computed<ToggleSettingViewData<NotificationSetting>[]>(() => {
    return this.computedSettings.map((option) => option());
  });

  notificationSettingsToggler(settingName: NotificationSetting) {
    this.notificationStore.toggleSettingState(settingName);
  }
}
