import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  AppearanceData,
  DisplaySettingState,
  Theme,
} from '../../../interfaces/disclosure/display-disclosure-settings';
import { inject } from '@angular/core';
import { DisplaySettingsService } from '../../../services/setting-services/display-settings-service/display-settings-service';

import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

const displaySettingState: DisplaySettingState = {
  appearance: 'system',
  compact: true,
};
export const displaySettingsStore = signalStore(
  { providedIn: 'root' },
  withState(displaySettingState),
  withProps(() => ({ displaySettingsService: inject(DisplaySettingsService) })),
  withHooks((store) => ({
    async onInit() {
      const displaySettingState = await store.displaySettingsService.loadSettings();
      patchState(store, displaySettingState);
    },
  })),
  withMethods((store) => ({
    updateAppearanceState(appearance: Theme): void {
      patchState(store, { appearance });
    },
    toggleCompactState(): void {
      patchState(store, (state) => ({ compact: !state.compact }));
    },
  })),
);
export const DISPLAY_SETTINGS_METADATA: Record<Theme, Omit<AppearanceData, 'checked'>> = {
  system: {
    name: 'appearance',
    value: 'system',
    icon: faDisplay,
  },
  light: {
    name: 'appearance',
    value: 'light',
    icon: faSun,
  },
  dark: {
    name: 'appearance',
    value: 'dark',
    icon: faMoon,
  },
};
