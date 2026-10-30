import { ChangeDetectionStrategy, Component, computed, inject, Type } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RadioGroupSettingsComponent } from '../../../shared/radio/radio-group-settings-component/radio-group-settings-component';
import { ThemeSettingsStore } from '../../../../../../stores/setting-stores/settings/radio/theme/theme-settings-store';
import {
  DISPLAY_SETTINGS_TITLE,
  THEME_SETTINGS_METADATA,
} from '../../../../../../stores/setting-stores/settings/radio/theme/theme-constants';
import {
  RadioGroupViewData,
  ThemeSetting,
} from '../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

@Component({
  imports: [FontAwesomeModule, RadioGroupSettingsComponent, RadioGroupSettingsComponent],
  selector: 'app-display-and-appearance-settings-component',
  styleUrl: './display-and-appearance-settings-component.css',
  templateUrl: './display-and-appearance-settings-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayAndAppearanceSettingsComponent {
  themeStore = inject(ThemeSettingsStore);

  themeViewData = computed<RadioGroupViewData<ThemeSetting>>(() => {
    const selectedOption = this.themeStore.draftedState().selectedOption;

    const settings = Object.values(THEME_SETTINGS_METADATA).map((option) => ({
      ...option,
      checked: option.settingName === selectedOption,
    }));

    return {
      title: DISPLAY_SETTINGS_TITLE,
      settings,
      feedbackData: { feedbackType: 'theme', payload: selectedOption },
    };
  });

  ThemeSettingSwitcher(theme: string) {
    if (this.isSettingKey(theme, THEME_SETTINGS_METADATA)) {
      this.themeStore.updateSelectedOption(theme);
    }
  }

  isSettingKey<TRecord extends object>(
    key: string,
    record: TRecord,
  ): key is Extract<TRecord, string> {
    return Object.hasOwn(record, key);
  }
}
