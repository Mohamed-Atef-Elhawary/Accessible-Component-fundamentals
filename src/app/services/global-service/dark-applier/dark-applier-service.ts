import { DOCUMENT, effect, inject, Injectable } from '@angular/core';
import { ThemeSettingsStore } from '../../../stores/setting-stores/settings/radio/theme/theme-settings-store';

@Injectable({
  providedIn: 'root',
})
export class DarkApplierService {
  private _doc = inject(DOCUMENT);
  private _themeStore = inject(ThemeSettingsStore);
  constructor() {
    effect(() => {
      const dark = this._themeStore.savedState().selectedOption === 'dark';
      this._doc.documentElement.classList.toggle('dark', dark);
    });
  }
}
