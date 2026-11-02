import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FEEDBACK_MATE_DATA } from './constant-text-size-feedback';

@Component({
  imports: [],
  selector: 'app-setting-text-size-feedback-component',
  styleUrl: './setting-text-size-feedback-component.css',
  templateUrl: './setting-text-size-feedback-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingTextSizeFeedbackComponent {
  textSizePayload = input.required<number>();
  feedbackMetaDate = FEEDBACK_MATE_DATA;
}
