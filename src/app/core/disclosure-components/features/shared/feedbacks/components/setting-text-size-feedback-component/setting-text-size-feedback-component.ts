import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-setting-text-size-feedback-component',
  styleUrl: './setting-text-size-feedback-component.css',
  templateUrl: './setting-text-size-feedback-component.html',
})
export class SettingTextSizeFeedbackComponent {
  textSizePayload = input.required<number>();
}
