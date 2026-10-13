import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  PrivacyOption,
  PrivacySettingsState,
} from '../../../../interfaces/disclosure/settings-interfaces/privacy-disclosure-settings';
import { PrivacySettingsService } from '../../../../services/setting-services/privacy-settings-service/privacy-settings-service';
import { inject } from '@angular/core';
import { RadioSettingsGroup } from '../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
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

export const PRIVACY_SETTINGS_METADATA: Record<
  PrivacyOption,
  Omit<RadioSettingsGroup<PrivacyOption>, 'checked'>
> = {
  public: { option: 'public', icon: faGlobe },
  friends: { option: 'friends', icon: faUserGroup },
  private: { option: 'private', icon: faLock },
};
