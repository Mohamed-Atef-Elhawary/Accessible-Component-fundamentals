import { Component, computed, input, signal, SimpleChanges } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { skip, switchMap, timer, map, startWith, tap } from 'rxjs';
import { NotificationPayload } from '../../../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import { FEEDBACK_MESSAGE } from './constant-notification-feedback';

@Component({
  imports: [],
  selector: 'app-setting-notification-feedback-component',
  styleUrl: './setting-notification-feedback-component.css',
  templateUrl: './setting-notification-feedback-component.html',
})
export class SettingNotificationFeedbackComponent {
  notificationPayload = input.required<NotificationPayload>();

  feedbackMessage = computed(() => {
    const settingName = this.notificationPayload().notificationSetting;
    const enabled = this.notificationPayload().enabled;
    const settingMessages = FEEDBACK_MESSAGE[settingName];
    return enabled ? settingMessages.on : settingMessages.off;
  });

  message = computed(() => {
    return this.isVisible() ? this.feedbackMessage() : null;
  });

  isVisible = toSignal(
    toObservable(this.notificationPayload).pipe(
      skip(1),
      switchMap(() =>
        timer(2000).pipe(
          map(() => false),
          startWith(true),
        ),
      ),
    ),

    { initialValue: false },
  );
}
