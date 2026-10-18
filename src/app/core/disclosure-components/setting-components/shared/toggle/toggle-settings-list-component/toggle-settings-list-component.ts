import { Component, computed, input, output } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { FEEDBACK_PREVIEW_POSITION } from '../../../../../../constants/feedback-preview-position';
import { PreviewPosition } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  ToggleSettingMetaData,
  ToggleSettingName,
  PositionedToggleSettingMetaData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { SettingsFeedbackResolverComponent } from '../../feedbacks/settings-feedback-resolver-component/settings-feedback-resolver-component';

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
      const previewPosition: PreviewPosition = FEEDBACK_PREVIEW_POSITION[data.preview.feedbackType];
      return { ...data, previewPosition };
    });
  });
  toggleCheckState = output<string>();
  ngOnChanges() {
    // console.log('settingsMetaData', this.settingsMetaData());
  }

  onToggleCheckState(setitngName: string) {
    this.toggleCheckState.emit(setitngName);
  }
}
