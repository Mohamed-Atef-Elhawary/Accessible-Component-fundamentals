import { Component, input } from '@angular/core';
import { THEME_LABELS } from '../../../../../../../constants/feedback-preview-position';
import { ThemeSetting } from '../../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

@Component({
  imports: [],
  selector: 'app-setting-theme-feedback-component',
  styleUrl: './setting-theme-feedback-component.css',
  templateUrl: './setting-theme-feedback-component.html',
})
export class SettingThemeFeedbackComponent {
  appearancePayload = input.required<ThemeSetting>();
  themeLabels = THEME_LABELS;
}
