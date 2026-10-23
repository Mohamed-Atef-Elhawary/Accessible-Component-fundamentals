import { DOCUMENT, effect, inject, Injectable } from '@angular/core';
import { CompactSettingsStore } from '../../../stores/setting-stores/settings/toggle-settings-stores/compact-settings-store/compact-settings-store';

@Injectable({
  providedIn: 'root',
})
export class CompactApplierService {
  private _doc = inject(DOCUMENT);
  private _compactStore = inject(CompactSettingsStore);
  constructor() {
    effect(() => {
      const compact = this._compactStore.savedState().compact;
      this._doc.documentElement.classList.toggle('compact', compact);
    });
  }
}
