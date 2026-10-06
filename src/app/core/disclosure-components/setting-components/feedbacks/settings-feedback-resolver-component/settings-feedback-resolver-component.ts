import { Component, computed, signal } from '@angular/core';
import { FeedbackData } from '../../../../../interfaces/disclosure/global-interfaces/global-settings';
import { SettingStatusFeedbackComponent } from '../components/setting-status-feedback-component/setting-status-feedback-component';

@Component({
  imports: [SettingStatusFeedbackComponent],
  selector: 'app-settings-feedback-resolver-component',
  styleUrl: './settings-feedback-resolver-component.css',
  templateUrl: './settings-feedback-resolver-component.html',
})
export class SettingsFeedbackResolverComponent {
  notificationStoreEmail = signal(true);

  emailnotificationFeedbackData = computed<FeedbackData<string>>(() => ({
    feedback: 'status',
    payload: `Email notifications turned ${this.notificationStoreEmail() ? 'on' : 'off'}`,
  }));
  updateNotificationStoreEmail() {
    console.log();
    this.notificationStoreEmail.update((v) => !v);
  }
}
