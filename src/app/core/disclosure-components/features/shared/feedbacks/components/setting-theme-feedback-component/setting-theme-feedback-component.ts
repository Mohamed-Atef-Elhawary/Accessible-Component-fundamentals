import { Component, input } from '@angular/core';
import { THEME_LABELS } from '../../../../../../../constants/feedback-preview-position';
import { Theme } from '../../../../../../../interfaces/disclosure/settings-interfaces/display-disclosure-settings';

@Component({
  imports: [],
  selector: 'app-setting-theme-feedback-component',
  styleUrl: './setting-theme-feedback-component.css',
  templateUrl: './setting-theme-feedback-component.html',
})
export class SettingThemeFeedbackComponent {
  appearancePayload = input.required<Theme>();
  themeLabels = THEME_LABELS;
}
