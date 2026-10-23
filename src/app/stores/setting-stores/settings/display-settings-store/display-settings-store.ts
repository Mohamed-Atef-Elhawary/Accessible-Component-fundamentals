import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  DisplaySettingsState,
  DisplaySettingValue,
  Theme,
} from '../../../../interfaces/disclosure/settings-interfaces/display-disclosure-settings';
import { inject } from '@angular/core';
import { DisplaySettingsService } from '../../../../services/setting-services/display-settings-service/display-settings-service';

import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { RadioSettingsGroup } from '../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

const displaySettingValues: DisplaySettingValue = {
  selectedOption: 'system',
};

const displaySettingsState: DisplaySettingsState = {
  draftedState: displaySettingValues,
  savedState: displaySettingValues,
};
export const DisplaySettingsStore = signalStore(
  { providedIn: 'root' },
  withState(displaySettingsState),
  withProps(() => ({ displaySettingsService: inject(DisplaySettingsService) })),
  withHooks((store) => ({
    async onInit() {
      const displaySettingValues = await store.displaySettingsService.loadSettings();
      patchState(store, { draftedState: displaySettingValues, savedState: displaySettingValues });
    },
  })),
  withMethods((store) => ({
    updateAppearanceValue(selectedOption: Theme): void {
      patchState(store, { draftedState: { selectedOption } });
    },
  })),
);

export const DISPLAY_SETTINGS_METADATA: Record<
  Theme,
  Omit<RadioSettingsGroup<Theme>, 'checked'>
> = {
  system: {
    option: 'system',
    name: 'theme',
    icon: faDisplay,
  },
  light: {
    option: 'light',
    name: 'theme',

    icon: faSun,
  },
  dark: {
    option: 'dark',
    name: 'theme',
    icon: faMoon,
  },
};
