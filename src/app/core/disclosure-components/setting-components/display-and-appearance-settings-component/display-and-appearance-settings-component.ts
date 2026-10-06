import { Component, computed, inject } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  DISPLAY_SETTINGS_METADATA,
  displaySettingsStore,
} from '../../../../stors/setting-stores/settings/display-settings-store/display-settings-store';
import {
  AppearanceData,
  Theme,
} from '../../../../interfaces/disclosure/settings-interfaces/display-disclosure-settings';
import { FeedbackData } from '../../../../interfaces/disclosure/global-interfaces/global-settings';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-display-and-appearance-settings-component',
  styleUrl: './display-and-appearance-settings-component.css',
  templateUrl: './display-and-appearance-settings-component.html',
})
export class DisplayAndAppearanceSettingsComponent {
  displayStore = inject(displaySettingsStore);
  appearanceOptions = computed<AppearanceData[]>(() => {
    const appearance = this.displayStore.appearance();

    const system = { ...DISPLAY_SETTINGS_METADATA.system, checked: appearance === 'system' };

    const light = { ...DISPLAY_SETTINGS_METADATA.light, checked: appearance === 'light' };

    const dark = { ...DISPLAY_SETTINGS_METADATA.dark, checked: appearance === 'dark' };

    return [system, light, dark];
  });

  appearanceFeedbackData = computed<FeedbackData<Theme>>(() => ({
    feedback: 'appearance',
    payload: this.displayStore.appearance(),
  }));

  onChange(appearance: Theme) {
    this.displayStore.updateAppearanceState(appearance);
  }

  getLabel(mode: Theme): string {
    return `${mode} mode`;
  }
  capitalizeTitle(mode: Theme): string {
    return `${mode[0].toUpperCase()}${mode.slice(1)}`;
  }
}
