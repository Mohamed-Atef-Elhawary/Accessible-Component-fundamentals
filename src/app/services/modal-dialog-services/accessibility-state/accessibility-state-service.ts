import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessibilityStateService {
  private _closeOnBackdropClick = signal<boolean>(true);
  private _closeOnEsc = signal<boolean>(true);
  private _lockScroll = signal<boolean>(false);

  closeOnBackdropClick = this._closeOnBackdropClick.asReadonly();
  closeOnEsc = this._closeOnEsc.asReadonly();
  lockScroll = this._lockScroll.asReadonly();

  toggleCloseOnBackdropClick() {
    this._closeOnBackdropClick.update((state) => !state);
  }
  toggleCloseOnEsc() {
    this._closeOnEsc.update((state) => !state);
  }
  toggleLockScroll() {
    this._lockScroll.update((state) => !state);
  }
}
