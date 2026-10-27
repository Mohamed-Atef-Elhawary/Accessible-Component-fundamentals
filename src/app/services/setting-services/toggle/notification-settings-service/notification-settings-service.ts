import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  ToggleSettingsState,
  NotificationSetting,
} from '../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

@Injectable({
  providedIn: 'root',
})
export class NotificationSettingsService implements SettingsService<
  ToggleSettingsState<NotificationSetting>
> {
  async loadSettings(): Promise<ToggleSettingsState<NotificationSetting>> {
    return { email: false, push: false };
  }
  async saveSettings(settings: ToggleSettingsState<NotificationSetting>): Promise<void> {}
}
