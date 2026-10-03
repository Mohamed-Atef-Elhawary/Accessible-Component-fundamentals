import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { PrivacySettingsState } from '../../../../interfaces/disclosure/settings-interfaces/privacy-disclosure-settings';
import { PrivacySettingsService } from '../../../../services/setting-services/privacy-settings-service/privacy-settings-service';
import { inject } from '@angular/core';

const initialState: PrivacySettingsState = { selectedOption: 'public' };
export const privacySettingsStore = signalStore(
  withState(initialState),
  withProps(() => ({ privacyService: inject(PrivacySettingsService) })),
  withHooks((store) => ({
    async onInit() {
      const selectedOption = await store.privacyService.loadSettings();
      patchState(store, selectedOption);
    },
  })),
  withMethods((store) => ({
    updatePrivacyState(privacySettingsState: PrivacySettingsState): void {
      patchState(store, privacySettingsState);
    },
    saveState(): void {},
  })),
);
