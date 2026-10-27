import { Component, computed, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, skip, startWith, switchMap, tap, timer } from 'rxjs';
import { MOTION_PREVIEW_DESCRIPTION } from './constant-motion-feedback';

@Component({
  imports: [],
  selector: 'app-setting-motion-feedback-component',
  styleUrl: './setting-motion-feedback-component.css',
  templateUrl: './setting-motion-feedback-component.html',
})
export class SettingMotionFeedbackComponent {
  motionPayload = input.required<boolean>();

  motionPreviewDescription = computed(() =>
    this.motionPayload() ? MOTION_PREVIEW_DESCRIPTION.reduced : MOTION_PREVIEW_DESCRIPTION.full,
  );
  isVisible = toSignal(
    toObservable(this.motionPayload).pipe(
      skip(1),
      switchMap(() => {
        return timer(3000).pipe(
          map(() => false),
          startWith(true),
        );
      }),
    ),

    {
      initialValue: false,
    },
  );
}
