import { inject } from '@angular/core';
import { NotificationSettingsService } from '../../services/setting-services/notification-settings-service/notification-settings-service';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

export type NotificationName = 'email' | 'push';
export interface NotificationSetting {
  id: string;
  notificationName: NotificationName;
  label: string;
  checked: boolean;
}

interface NotificationSettingsState {
  email: NotificationSetting;
  push: NotificationSetting;
  isLoading: boolean;
}

const initialState: NotificationSettingsState = {
  email: {
    id: 'emailNotification',
    notificationName: 'email',
    checked: false,
    label: 'Email Notifications',
  },
  push: {
    id: 'pushNotification',
    notificationName: 'push',
    checked: false,
    label: 'push Notifications',
  },
  isLoading: false,
};

export const NotificationSettingStore = signalStore(
  withState<NotificationSettingsState>(initialState),

  withProps(() => ({
    notificationSettingsService: inject(NotificationSettingsService),
  })),

  withHooks((store) => ({
    async onInit() {
      patchState(store, { isLoading: true });

      const notificationState = await store.notificationSettingsService.loadNotifications();

      patchState(store, (state) => ({
        isLoading: false,
        email: { ...state.email, checked: notificationState['email'] },
        push: { ...state.push, checked: notificationState['push'] },
      }));
    },
  })),

  withMethods((store) => ({
    toggleNotificationState(NotificationName: NotificationName): void {
      patchState(store, (state) => ({
        [NotificationName]: {
          ...state[NotificationName],
          checked: !state[NotificationName].checked,
        },
      }));
    },
  })),
);
