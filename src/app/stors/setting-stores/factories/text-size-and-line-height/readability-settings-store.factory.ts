import { inject, Type } from '@angular/core';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/settings-service';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

export function buildReadabilitySettingsStore<TState extends object>(
  serviceType: Type<SettingsService<TState>>,
  initialState: TState,
) {
  return signalStore(
    { providedIn: 'root' },
    withState<TState>(initialState),
    withProps(() => ({ service: inject(serviceType) })),
    withHooks((store) => ({
      async onInit() {
        const loadedState = await store.service.loadSettings();
        patchState(store, loadedState);
      },
    })),
    withMethods((store) => ({
      updateSettingState(newValue: TState): void {
        patchState(store, newValue);
      },
    })),
  );
}
