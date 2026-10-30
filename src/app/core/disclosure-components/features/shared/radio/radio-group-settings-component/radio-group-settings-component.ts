import { Component, computed, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SettingsFeedbackResolverComponent } from '../../feedbacks/settings-feedback-resolver-component/settings-feedback-resolver-component';
import { NgTemplateOutlet } from '@angular/common';
import { FEEDBACK_POSITION } from '../../constants-feedback-position';
import {
  AnyRadioGroupViewData,
  RadioGroupOptions,
  RadioGroupViewData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { FeedbackPosition } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
@Component({
  imports: [FontAwesomeModule, SettingsFeedbackResolverComponent, NgTemplateOutlet],
  selector: 'app-radio-group-settings-component',
  styleUrl: './radio-group-settings-component.css',
  templateUrl: './radio-group-settings-component.html',
})
export class RadioGroupSettingsComponent {
  radioViewData = input.required<AnyRadioGroupViewData>();

  selectedOptionChanged = output<RadioGroupOptions>();

  previewPosition = computed<FeedbackPosition>(() => {
    return FEEDBACK_POSITION[this.radioViewData().feedbackData.feedbackType];
  });

  onSelectedOptionChanged(option: RadioGroupOptions) {
    this.selectedOptionChanged.emit(option);
  }
}
