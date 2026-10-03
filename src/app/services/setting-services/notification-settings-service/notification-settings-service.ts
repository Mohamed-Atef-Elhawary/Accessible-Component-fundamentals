import { Injectable } from '@angular/core';
import {
  NotificationSettingName,
  ToggleSettingsState,
} from '../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { SettingsService } from '../../../interfaces/disclosure/global-interfaces/settings-service';

@Injectable({
  providedIn: 'root',
})
export class NotificationSettingsService implements SettingsService<
  ToggleSettingsState<NotificationSettingName>
> {
  async loadSettings(): Promise<ToggleSettingsState<NotificationSettingName>> {
    return { email: false, push: false };
  }
  async saveSettings(settings: ToggleSettingsState<NotificationSettingName>): Promise<void> {}
}
