import { Component, input } from '@angular/core';
import { FEEDBACK_MATE_DATA } from './constant-line-height-feedback';

@Component({
  imports: [],
  selector: 'app-setting-line-height-feedback-component',
  styleUrl: './setting-line-height-feedback-component.css',
  templateUrl: './setting-line-height-feedback-component.html',
})
export class SettingLineHeightFeedbackComponent {
  lineHeightPayload = input.required<number>();
  feedbackMetaDate = FEEDBACK_MATE_DATA;
}
