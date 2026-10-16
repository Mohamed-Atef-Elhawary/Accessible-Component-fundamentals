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
  PrivacySettingsValue,
} from '../../../../interfaces/disclosure/settings-interfaces/privacy-disclosure-settings';
import { PrivacySettingsService } from '../../../../services/setting-services/privacy-settings-service/privacy-settings-service';
import { inject } from '@angular/core';
import { RadioSettingsGroup } from '../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const privacySettingValue: PrivacySettingsValue = {
  selectedOption: 'public',
};

const privacySettingsState: PrivacySettingsState = {
  draftedState: privacySettingValue,
  savedState: privacySettingValue,
};

export const privacySettingsStore = signalStore(
  withState(privacySettingsState),
  withProps(() => ({ privacyService: inject(PrivacySettingsService) })),

  withHooks((store) => ({
    async onInit() {
      const selectedOption = await store.privacyService.loadSettings();
      patchState(store, { draftedState: selectedOption, savedState: selectedOption });
    },
  })),

  withMethods((store) => ({
    updatePrivacyState(privacySettingsValue: PrivacySettingsValue): void {
      patchState(store, { draftedState: privacySettingsValue });
    },
    saveState(): void {},
  })),
);

export const PRIVACY_SETTINGS_METADATA: Record<
  PrivacyOption,
  Omit<RadioSettingsGroup<PrivacyOption>, 'checked'>
> = {
  public: { option: 'public', name: 'privacy', icon: faGlobe },
  friends: { option: 'friends', name: 'privacy', icon: faUserGroup },
  private: { option: 'private', name: 'privacy', icon: faLock },
};
