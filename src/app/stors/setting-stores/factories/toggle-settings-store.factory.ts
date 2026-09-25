import { inject, Type } from '@angular/core';
import {
  ToggleService,
  ToggleSettingsState,
} from '../../../interfaces/disclosure/toggle-disclosure-settings';
import {
  getState,
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

export function createToggleSettingsStore<TName extends string>(
  ServiceType: Type<ToggleService<TName>>,
  initialState: ToggleSettingsState<TName>,
) {
  return signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withProps(() => ({ service: inject(ServiceType) })),

    withHooks((store) => ({
      async onInit() {
        const loadedState: ToggleSettingsState<TName> = await store.service.loadSettings();
        patchState(store, loadedState as Partial<ToggleSettingsState<TName>>);
      },
    })),

    withMethods((store) => ({
      toggleSettingState(settingName: TName) {
        const currentState = getState(store);
        const current = currentState[settingName] as boolean;
        patchState(
          store,
          (state) => ({ [settingName]: !current }) as Partial<ToggleSettingsState<TName>>,
        );
      },

      async saveState() {
        await store.service.saveSettings(getState(store));
      },
    })),
  );
}
