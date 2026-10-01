import { Component, input, output } from '@angular/core';
import {
  AccessibilitySettingName,
  NotificationSettingName,
  ToggleSettingMetaData,
} from '../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

@Component({
  imports: [],
  selector: 'app-toggle-settings-list-component',
  styleUrl: './toggle-settings-list-component.css',
  templateUrl: './toggle-settings-list-component.html',
  host: { class: 'block' },
})
export class ToggleSettingsListComponent {
  settingsMetaData =
    input.required<ToggleSettingMetaData<NotificationSettingName | AccessibilitySettingName>[]>();
  toggleCheckState = output<string>();

  onToggleCheckState(setitngName: string) {
    this.toggleCheckState.emit(setitngName);
  }
}
