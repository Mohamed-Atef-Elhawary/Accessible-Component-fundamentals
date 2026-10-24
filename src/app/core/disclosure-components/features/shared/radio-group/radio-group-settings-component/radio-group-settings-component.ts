import { Component, computed, input, output } from '@angular/core';
import {
  RadioGroup,
  RadioSettingsData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SettingsFeedbackResolverComponent } from '../../feedbacks/settings-feedback-resolver-component/settings-feedback-resolver-component';
import { FeedbackData } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {} from '../../../../../../constants/feedback-preview-position';
import { NgTemplateOutlet } from '@angular/common';
import { FEEDBACK_POSITION } from '../../constants-feedback-position';
@Component({
  imports: [FontAwesomeModule, SettingsFeedbackResolverComponent, NgTemplateOutlet],
  selector: 'app-radio-group-settings-component',
  styleUrl: './radio-group-settings-component.css',
  templateUrl: './radio-group-settings-component.html',
})
export class RadioGroupSettingsComponent {
  radioSettingsData = input.required<RadioSettingsData<RadioGroup>>();
  radioFeedbackData = input.required<FeedbackData>();
  previewPosition = computed<'top' | 'bottom'>(
    () => FEEDBACK_POSITION[this.radioFeedbackData().feedbackType],
  );
  changeSetting = output<RadioGroup>();
  settingDataChanged(option: RadioGroup) {
    this.changeSetting.emit(option);
  }
  ngOnChanges() {}
}
