import { Component, computed, input, output } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { FeedbackPosition } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  ToggleSettingData,
  ToggleSettingName,
  PositionedToggleSettingData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { SettingsFeedbackResolverComponent } from '../../feedbacks/settings-feedback-resolver-component/settings-feedback-resolver-component';
import { FEEDBACK_POSITION } from '../../constants-feedback-position';

@Component({
  imports: [SettingsFeedbackResolverComponent, NgTemplateOutlet],
  selector: 'app-toggle-settings-list-component',
  styleUrl: './toggle-settings-list-component.css',
  templateUrl: './toggle-settings-list-component.html',
})
export class ToggleSettingsListComponent {
  settingsMetaData = input.required<ToggleSettingData<ToggleSettingName>[]>();
  positionedSettingMetaData = computed<PositionedToggleSettingData<ToggleSettingName>[]>(() => {
    return this.settingsMetaData().map((data) => {
      const feedbackPosition: FeedbackPosition = FEEDBACK_POSITION[data.feedbackData.feedbackType];
      return { ...data, feedbackPosition };
    });
  });
  toggleCheckState = output<string>();

  onToggleCheckState(settingName: string) {
    this.toggleCheckState.emit(settingName);
  }
}
