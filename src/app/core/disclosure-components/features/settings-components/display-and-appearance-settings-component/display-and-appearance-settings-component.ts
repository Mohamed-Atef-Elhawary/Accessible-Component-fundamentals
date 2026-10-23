import { Component, computed, inject } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedbackData } from '../../../../../interfaces/disclosure/global-interfaces/global-settings';
import { Theme } from '../../../../../interfaces/disclosure/settings-interfaces/display-disclosure-settings';
import { RadioSettingsData } from '../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import {
  DisplaySettingsStore,
  DISPLAY_SETTINGS_METADATA,
} from '../../../../../stores/setting-stores/settings/display-settings-store/display-settings-store';
import { RadioGroupSettingsComponent } from '../../shared/radio-group/radio-group-settings-component/radio-group-settings-component';

@Component({
  imports: [FontAwesomeModule, RadioGroupSettingsComponent, RadioGroupSettingsComponent],
  selector: 'app-display-and-appearance-settings-component',
  styleUrl: './display-and-appearance-settings-component.css',
  templateUrl: './display-and-appearance-settings-component.html',
})
export class DisplayAndAppearanceSettingsComponent {
  displayStore = inject(DisplaySettingsStore);
  appearanceOptions = computed<RadioSettingsData<Theme>>(() => {
    const selectedOption = this.displayStore.draftedState().selectedOption;
    const system = { ...DISPLAY_SETTINGS_METADATA.system, checked: selectedOption === 'system' };

    const light = { ...DISPLAY_SETTINGS_METADATA.light, checked: selectedOption === 'light' };

    const dark = { ...DISPLAY_SETTINGS_METADATA.dark, checked: selectedOption === 'dark' };

    return {
      title: 'Appearance',
      settings: [system, light, dark],
    };
  });

  appearanceFeedbackData = computed<FeedbackData>(() => {
    const selectedOption = this.displayStore.draftedState.selectedOption();
    return {
      feedbackType: 'theme',
      payload: selectedOption,
    };
  });

  updateAppearanceValue(theme: string) {
    const themes: Theme[] = ['system', 'light', 'dark'] as const;
    if (this.isTheme(theme, themes)) {
      this.displayStore.updateAppearanceValue(theme);
    }
  }

  isTheme(theme: string, themes: readonly string[]): theme is Theme {
    return themes.includes(theme);
  }
}
