import { Component, computed, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, skip, startWith, switchMap, timer } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-setting-status-feedback-component',
  styleUrl: './setting-status-feedback-component.css',
  templateUrl: './setting-status-feedback-component.html',
})
export class SettingStatusFeedbackComponent {
  payload = input.required<string>();
  message = computed(() => (this.isVisible() ? this.payload() : null));
  isVisible = toSignal(
    toObservable(this.payload).pipe(
      skip(1),
      switchMap(() =>
        timer(1000).pipe(
          map(() => false),
          startWith(true),
        ),
      ),
    ),

    { initialValue: false },
  );
}
