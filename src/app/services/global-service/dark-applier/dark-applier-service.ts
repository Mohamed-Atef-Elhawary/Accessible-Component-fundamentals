import { DOCUMENT, effect, inject, Injectable } from '@angular/core';
import { DisplaySettingsStore } from '../../../stors/setting-stores/settings/display-settings-store/display-settings-store';

@Injectable({
  providedIn: 'root',
})
export class DarkApplierService {
  private _doc = inject(DOCUMENT);
  private _displayStore = inject(DisplaySettingsStore);
  constructor() {
    effect(() => {
      const dark = this._displayStore.savedState().selectedOption === 'dark';
      this._doc.documentElement.classList.toggle('dark', dark);
    });
  }
}
