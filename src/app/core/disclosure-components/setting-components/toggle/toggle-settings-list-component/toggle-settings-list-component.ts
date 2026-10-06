import { ChangeDetectorRef, Component, inject, input, output } from '@angular/core';
import {
  AccessibilitySettingName,
  CompactSettingName,
  NotificationSettingName,
  ToggleSettingMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

@Component({
  imports: [],
  selector: 'app-toggle-settings-list-component',
  styleUrl: './toggle-settings-list-component.css',
  templateUrl: './toggle-settings-list-component.html',
})
export class ToggleSettingsListComponent {
  settingsMetaData =
    input.required<
      ToggleSettingMetaData<
        NotificationSettingName | AccessibilitySettingName | CompactSettingName
      >[]
    >();
  toggleCheckState = output<string>();

  onToggleCheckState(setitngName: string) {
    this.toggleCheckState.emit(setitngName);
  }
}
