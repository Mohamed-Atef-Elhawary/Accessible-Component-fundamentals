import { Injectable } from '@angular/core';

export interface NotificationState {
  email: boolean;
  push: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationSettingsService {
  async loadNotifications(): Promise<NotificationState> {
    return { email: false, push: true };
  }

  async saveNotifications(notification: NotificationState): Promise<void> {}
}
