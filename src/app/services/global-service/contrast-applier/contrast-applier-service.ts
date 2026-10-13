import { DOCUMENT, effect, inject, Injectable } from '@angular/core';
import { AccessibilitySettingsStore } from '../../../stors/setting-stores/settings/toggle-settings-stores/accessibility-settings-store/accessibility-settings.store';

@Injectable({
  providedIn: 'root',
})
export class ContrastApplierService {
  private _doc = inject(DOCUMENT);
  private _accessibilityStore = inject(AccessibilitySettingsStore);
  constructor() {
    effect(() => {
      const contrast = this._accessibilityStore.savedState().contrast;
      this._doc.documentElement.classList.toggle('contrast', contrast);
    });
  }
}
