import { Component, computed, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  PrivacySetting,
  RadioGroupViewData,
  RadioSettingEntryData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

import { RadioGroupSettingsComponent } from '../../../shared/radio-group/radio-group-settings-component/radio-group-settings-component';
import { PrivacySettingsStore } from '../../../../../../stores/setting-stores/settings/radio/privacy/privacy-settings-store';
import {
  PRIVACY_SETTINGS_METADATA,
  PRIVACY_SETTINGS_TITLE,
} from '../../../../../../stores/setting-stores/settings/radio/privacy/privacy-settings-constants';

@Component({
  imports: [FontAwesomeModule, RadioGroupSettingsComponent],
  selector: 'app-privacy-settings-component',
  styleUrl: './privacy-settings-component.css',
  templateUrl: './privacy-settings-component.html',
})
export class PrivacySettingsComponent {
  privacyStore = inject(PrivacySettingsStore);

  privacyViewData = computed<RadioGroupViewData<PrivacySetting>>(() => {
    const selectedOption = this.privacyStore.draftedState.selectedOption();

    const settings: RadioSettingEntryData<PrivacySetting>[] = Object.values(
      PRIVACY_SETTINGS_METADATA,
    ).map((option) => ({
      ...option,
      checked: option.settingName === selectedOption,
    }));

    return {
      title: PRIVACY_SETTINGS_TITLE,
      settings,
      feedbackData: { feedbackType: 'privacy', payload: selectedOption },
    };
  });

  privacySettingSwitcher(option: string) {
    if (this.isSettingKey(option, PRIVACY_SETTINGS_METADATA)) {
      this.privacyStore.updateSelectedOption(option);
    }
  }

  isSettingKey<TRecord extends object>(
    key: string,
    record: TRecord,
  ): key is Extract<keyof TRecord, string> {
    return Object.hasOwn(record, key);
  }
}
