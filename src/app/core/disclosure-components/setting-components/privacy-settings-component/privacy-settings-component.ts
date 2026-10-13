import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  PrivacyOption,
  PrivacySettingsData,
  PrivacySettingsState,
} from '../../../../interfaces/disclosure/settings-interfaces/privacy-disclosure-settings';
import {
  PRIVACY_SETTINGS_METADATA,
  privacySettingsStore,
} from '../../../../stors/setting-stores/settings/privacy-settings-store/privacy-settings-store';
import {
  RadioSettingsData,
  RadioSettingsGroup,
} from '../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { RadioGroupSettingsComponent } from '../shared/radio-group/radio-group-settings-component/radio-group-settings-component';

@Component({
  imports: [FontAwesomeModule, RadioGroupSettingsComponent],
  selector: 'app-privacy-settings-component',
  styleUrl: './privacy-settings-component.css',
  templateUrl: './privacy-settings-component.html',
  providers: [privacySettingsStore],
})
export class PrivacySettingsComponent {
  privacyStore = inject(privacySettingsStore);

  privacySettingsData = computed<RadioSettingsData<PrivacyOption>>(() => {
    const selectedOption = this.privacyStore.selectedOption();
    const publicOption = {
      ...PRIVACY_SETTINGS_METADATA.public,
      checked: selectedOption === 'public',
    };
    const friends = {
      ...PRIVACY_SETTINGS_METADATA.friends,
      checked: selectedOption === 'friends',
    };
    const privateOption = {
      ...PRIVACY_SETTINGS_METADATA.private,
      checked: selectedOption === 'private',
    };
    return {
      title: 'Who can see my profile?',
      settings: [publicOption, friends, privateOption],
    };
  });

  updatePrivacyState(option: string) {
    const options = ['public', 'friends', 'private'] as const;
    if (this.isPrivacySettingsState(option, options)) {
      const privacySettingsState: PrivacySettingsState = {
        selectedOption: option,
      };
      this.privacyStore.updatePrivacyState(privacySettingsState);
    }
  }
  isPrivacySettingsState(option: string, options: readonly string[]): option is PrivacyOption {
    return options.includes(option);
  }
}
