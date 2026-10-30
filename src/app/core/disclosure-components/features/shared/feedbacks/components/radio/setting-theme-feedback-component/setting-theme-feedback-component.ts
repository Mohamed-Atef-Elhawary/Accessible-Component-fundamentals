import { Component, input } from '@angular/core';
import { ThemeSetting } from '../../../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

@Component({
  imports: [],
  selector: 'app-setting-theme-feedback-component',
  styleUrl: './setting-theme-feedback-component.css',
  templateUrl: './setting-theme-feedback-component.html',
})
export class SettingThemeFeedbackComponent {
  appearancePayload = input.required<ThemeSetting>();
}
