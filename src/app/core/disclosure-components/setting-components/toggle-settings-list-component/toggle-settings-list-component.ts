import { Component, input, output } from '@angular/core';
import { NotificationSetting } from '../../../../stors/setting-stores/NotificationSettingsStore';

@Component({
  imports: [],
  selector: 'app-toggle-settings-list-component',
  styleUrl: './toggle-settings-list-component.css',
  templateUrl: './toggle-settings-list-component.html',
  host: { class: 'block' },
})
export class ToggleSettingsListComponent {
  notificationSettings = input.required<NotificationSetting[]>();
  toggleCheckState = output<string>();

  onToggleCheckState(notificationName: string) {
    this.toggleCheckState.emit(notificationName);
  }
}
