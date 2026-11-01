import { inject, linkedSignal, Type } from '@angular/core';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  patchState,
  signalStore,
  withHooks,
  withLinkedState,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  RangeSettingOptions,
  RangeState,
} from '../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';

export function buildRangeSettingsStore(
  serviceType: Type<SettingsService<RangeState<RangeSettingOptions>>>,
  initialState: RangeState<RangeSettingOptions>,
) {
  return signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withLinkedState((store) => ({
      draftedPercent: linkedSignal(() => store.preferredPercent()),
    })),
    withProps(() => ({ rangeService: inject(serviceType) })),
    withHooks((store) => ({
      async onInit() {
        const loadedState = await store.rangeService.loadSettings();
        patchState(store, loadedState);
      },
    })),
    withMethods((store) => ({
      updatePreferredPercent(newPreferredPercent: number): void {
        patchState(store, { draftedPercent: newPreferredPercent });
      },
    })),
  );
}
