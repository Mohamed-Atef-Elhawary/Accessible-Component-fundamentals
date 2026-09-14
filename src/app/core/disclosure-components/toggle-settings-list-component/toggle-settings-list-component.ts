import { Component, input, signal } from '@angular/core';
import { SettingList } from '../../../interfaces/settings-list';

@Component({
  imports: [],
  selector: 'app-toggle-settings-list-component',
  styleUrl: './toggle-settings-list-component.css',
  templateUrl: './toggle-settings-list-component.html',
})
export class ToggleSettingsListComponent {
  settingList = input.required<SettingList[]>();
  toggleCheckState(id: string) {}
}
