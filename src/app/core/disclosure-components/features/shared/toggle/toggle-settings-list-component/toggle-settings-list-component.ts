import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  viewChild,
} from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { FeedbackPosition } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  ToggleSettingOptions,
  ToggleSettingViewData,
  PositionedToggleSettingViewData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { SettingsFeedbackResolverComponent } from '../../feedbacks/settings-feedback-resolver-component/settings-feedback-resolver-component';
import { FEEDBACK_POSITION } from '../../constants-feedback-position';

@Component({
  imports: [SettingsFeedbackResolverComponent, NgTemplateOutlet],
  selector: 'app-toggle-settings-list-component',
  styleUrl: './toggle-settings-list-component.css',
  templateUrl: './toggle-settings-list-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleSettingsListComponent<TOption extends ToggleSettingOptions> {
  settingViewData = input.required<ToggleSettingViewData<TOption>[]>();
  settingToggled = output<TOption>();

  positionedSettingMetaData = computed<PositionedToggleSettingViewData<TOption>[]>(() => {
    return this.settingViewData().map((option) => {
      const feedbackPosition: FeedbackPosition = FEEDBACK_POSITION[option.settingName];
      return { ...option, feedbackPosition };
    });
  });

  onSettingToggled(settingName: TOption) {
    this.settingToggled.emit(settingName);
  }
}
