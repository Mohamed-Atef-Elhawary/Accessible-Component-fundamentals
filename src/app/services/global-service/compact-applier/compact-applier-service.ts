import { DOCUMENT, effect, inject, Injectable } from '@angular/core';
import { DensitySettingsStore } from '../../../stores/setting-stores/settings/toggle-settings-stores/density/density-settings-store';

@Injectable({
  providedIn: 'root',
})
export class CompactApplierService {
  private _doc = inject(DOCUMENT);
  private _densityStore = inject(DensitySettingsStore);
  constructor() {
    effect(() => {
      const compact = this._densityStore.savedState().compact;
      this._doc.documentElement.classList.toggle('compact', compact);
    });
  }
}
