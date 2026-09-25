import { Injectable } from '@angular/core';
import {
  NotificationSettingName,
  ToggleService,
  ToggleSettingsState,
} from '../../../interfaces/disclosure/toggle-disclosure-settings';

export interface NotificationState {
  email: boolean;
  push: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationSettingsService implements ToggleService<NotificationSettingName> {
  async loadSettings(): Promise<ToggleSettingsState<NotificationSettingName>> {
    return { email: false, push: false };
  }
  async saveSettings(settings: ToggleSettingsState<NotificationSettingName>): Promise<void> {}
}
