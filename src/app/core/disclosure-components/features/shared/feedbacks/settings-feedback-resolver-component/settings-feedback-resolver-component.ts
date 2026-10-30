import { Component, input } from '@angular/core';
import { SettingCompactFeedbackComponent } from '../components/toggle/setting-compact-feedback-component/setting-compact-feedback-component';
import { SettingMotionFeedbackComponent } from '../components/toggle/setting-motion-feedback-component/setting-motion-feedback-component';
import { SettingContrastFeedbackComponent } from '../components/toggle/setting-contrast-feedback-component/setting-contrast-feedback-component';
import { FeedbackData } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import { SettingThemeFeedbackComponent } from '../components/radio/setting-theme-feedback-component/setting-theme-feedback-component';
import { SettingPrivacyFeedbackComponent } from '../components/radio/setting-privacy-feedback-component/setting-privacy-feedback-component';
import { SettingTextSizeFeedbackComponent } from '../components/setting-text-size-feedback-component/setting-text-size-feedback-component';
import { SettingLineHeightFeedbackComponent } from '../components/setting-line-height-feedback-component/setting-line-height-feedback-component';
import { SettingNotificationFeedbackComponent } from '../components/toggle/setting-notification-feedback-component/setting-notification-feedback-component';
import { SettingLanguageFeedbackComponent } from '../components/radio/setting-language-feedback-component/setting-language-feedback-component';

@Component({
  imports: [
    SettingNotificationFeedbackComponent,
    SettingMotionFeedbackComponent,
    SettingCompactFeedbackComponent,
    SettingContrastFeedbackComponent,
    SettingPrivacyFeedbackComponent,
    SettingThemeFeedbackComponent,
    SettingLanguageFeedbackComponent,
    SettingTextSizeFeedbackComponent,
    SettingLineHeightFeedbackComponent,
  ],
  selector: 'app-settings-feedback-resolver-component',
  styleUrl: './settings-feedback-resolver-component.css',
  templateUrl: './settings-feedback-resolver-component.html',
})
export class SettingsFeedbackResolverComponent {
  feedbackData = input.required<FeedbackData>();
}
