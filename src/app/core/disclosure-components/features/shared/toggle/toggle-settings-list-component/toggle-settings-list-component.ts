import { Component, computed, input, output } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { FeedbackPosition } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  ToggleSettingMetaData,
  ToggleSettingName,
  PositionedToggleSettingMetaData,
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
  settingsMetaData = input.required<ToggleSettingMetaData<ToggleSettingName>[]>();
  positionedSettingMetaData = computed<PositionedToggleSettingMetaData<ToggleSettingName>[]>(() => {
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
