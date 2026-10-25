import { inject, Type } from '@angular/core';
import { SettingsService } from '../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  RadioGroupName,
  RadioGroupState,
} from '../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

export function buildRadioSettingsStore<TGroup extends RadioGroupName>(
  initialState: RadioGroupState<TGroup>,
  serviceType: Type<SettingsService<RadioGroupState<TGroup>>>,
) {
  return signalStore(
    { providedIn: 'root' },
    withState({ draftedState: { ...initialState }, savedState: { ...initialState } }),
    withProps(() => ({ radioService: inject(serviceType) })),
    withHooks((store) => ({
      async onInit() {
        const loadedState = await store.radioService.loadSettings();
        patchState(store, {
          draftedState: { ...loadedState },
          savedState: { ...loadedState },
        });
      },
    })),
    withMethods((store) => ({
      updateSelectedOption(option: TGroup) {
        const updatedOption: RadioGroupState<TGroup> = { selectedOption: option };
        patchState(store, { draftedState: updatedOption });
      },

      async saveState() {
        await store.radioService.saveSettings(store.draftedState());
      },
    })),
  );
}
