import { inject, Type } from '@angular/core';
import {
  getState,
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import { ToggleSettingsState } from '../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';

export function buildToggleSettingsStore<TName extends string>(
  serviceType: Type<SettingsService<ToggleSettingsState<TName>>>,
  initialState: ToggleSettingsState<TName>,
) {
  return signalStore(
    { providedIn: 'root' },
    withState({ draftedState: { ...initialState }, savedState: { ...initialState } }),
    withProps(() => ({ service: inject(serviceType) })),

    withHooks((store) => ({
      async onInit() {
        const loadedState: ToggleSettingsState<TName> = await store.service.loadSettings();
        patchState(store, (state) => ({
          draftedState: { ...state.draftedState, ...loadedState },
          savedState: { ...state.savedState, ...loadedState },
        }));
      },
    })),

    withMethods((store) => ({
      toggleSettingState(settingName: TName) {
        patchState(store, (state) => ({
          draftedState: { ...state.draftedState, [settingName]: !state.draftedState[settingName] },
        }));
      },

      async saveState() {
        // await store.service.saveSettings(getState(store));
      },
    })),
  );
}
