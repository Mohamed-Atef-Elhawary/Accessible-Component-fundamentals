import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-setting-line-height-feedback-component',
  styleUrl: './setting-line-height-feedback-component.css',
  templateUrl: './setting-line-height-feedback-component.html',
})
export class SettingLineHeightFeedbackComponent {
  lineHeightPayload = input.required<number>();
}
