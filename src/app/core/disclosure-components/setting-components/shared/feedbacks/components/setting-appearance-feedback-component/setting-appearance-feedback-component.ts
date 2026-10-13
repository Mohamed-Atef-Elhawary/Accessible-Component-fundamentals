import { Component, computed, input } from '@angular/core';
import { THEME_LABELS } from '../../../../../../../constants/feedback-preview-position';
import { Theme } from '../../../../../../../interfaces/disclosure/settings-interfaces/display-disclosure-settings';

@Component({
  imports: [],
  selector: 'app-setting-appearance-feedback-component',
  styleUrl: './setting-appearance-feedback-component.css',
  templateUrl: './setting-appearance-feedback-component.html',
})
export class SettingAppearanceFeedbackComponent {
  appearancePayload = input.required<Theme>();
  themeLabels = THEME_LABELS;
}
