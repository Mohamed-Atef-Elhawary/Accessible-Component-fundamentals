import { Component, computed, input, signal } from '@angular/core';

import { SettingStatusFeedbackComponent } from '../components/setting-status-feedback-component/setting-status-feedback-component';
import { SettingCompactFeedbackComponent } from '../components/setting-compact-feedback-component/setting-compact-feedback-component';
import { SettingMotionFeedbackComponent } from '../components/setting-motion-feedback-component/setting-motion-feedback-component';
import { SettingContrastFeedbackComponent } from '../components/setting-contrast-feedback-component/setting-contrast-feedback-component';
import { FeedbackData } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import { SettingThemeFeedbackComponent } from '../components/setting-theme-feedback-component/setting-theme-feedback-component';
import { SettingPrivacyFeedbackComponent } from '../components/setting-privacy-feedback-component/setting-privacy-feedback-component';

@Component({
  imports: [
    SettingStatusFeedbackComponent,
    SettingPrivacyFeedbackComponent,
    SettingThemeFeedbackComponent,
    SettingMotionFeedbackComponent,
    SettingCompactFeedbackComponent,
    SettingContrastFeedbackComponent,
  ],
  selector: 'app-settings-feedback-resolver-component',
  styleUrl: './settings-feedback-resolver-component.css',
  templateUrl: './settings-feedback-resolver-component.html',
})
export class SettingsFeedbackResolverComponent {
  feedbackData = input.required<FeedbackData>();
}
