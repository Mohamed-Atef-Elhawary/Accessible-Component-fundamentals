import { ChangeDetectorRef, Component, inject, input, output } from '@angular/core';
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
})
export class ToggleSettingsListComponent {
  settingsMetaData =
    input.required<ToggleSettingMetaData<NotificationSettingName | AccessibilitySettingName>[]>();
  toggleCheckState = output<string>();

  cdr = inject(ChangeDetectorRef);
  onToggleCheckState(setitngName: string) {
    console.log('this.settingsMetaData()', this.settingsMetaData()[0]);
    this.toggleCheckState.emit(setitngName);
    this.cdr.detectChanges();
    console.log('this.settingsMetaData()', this.settingsMetaData()[0]);
  }
}
