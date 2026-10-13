import { Component, input, output, signal } from '@angular/core';
import {
  RadioGroup,
  RadioSettingsData,
  RadioSettingsGroup,
} from '../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { PrivacyOption } from '../../../../../../interfaces/disclosure/settings-interfaces/privacy-disclosure-settings';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SettingsFeedbackResolverComponent } from '../../feedbacks/settings-feedback-resolver-component/settings-feedback-resolver-component';
import { FeedbackData } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
@Component({
  imports: [FontAwesomeModule, SettingsFeedbackResolverComponent],
  selector: 'app-radio-group-settings-component',
  styleUrl: './radio-group-settings-component.css',
  templateUrl: './radio-group-settings-component.html',
})
export class RadioGroupSettingsComponent {
  radioSettingsData = input.required<RadioSettingsData<RadioGroup>>();
  radioFeedbackData = input.required<FeedbackData>();
  changeSetting = output<RadioGroup>();
  settingDataChanged(option: RadioGroup) {
    this.changeSetting.emit(option);
  }
  ngOnChanges() {
    console.log('radioSettingsData', this.radioSettingsData());
    console.log('radioFeedbackData', this.radioFeedbackData());
  }
}
