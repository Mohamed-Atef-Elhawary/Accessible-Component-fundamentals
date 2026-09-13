import { Injectable, signal, WritableSignal } from '@angular/core';
import { AccessibilityOption } from '../../../interfaces/accessibility-options';

@Injectable({
  providedIn: 'root',
})
export class ModalAccessibilityStateService {
  private _closeOnBackdropClick = signal<boolean>(true);
  private _closeOnEsc = signal<boolean>(true);
  private _lockScroll = signal<boolean>(false);
  closeOnBackdropClick = this._closeOnBackdropClick.asReadonly();
  closeOnEsc = this._closeOnEsc.asReadonly();
  lockScroll = this._lockScroll.asReadonly();
  accessibilityOptions = signal<AccessibilityOption[]>([
    {
      id: 'toggleCloseOnBackdropClick',
      label: 'Close On Backdrop Click',
      checked: this.closeOnBackdropClick,
    },
    {
      id: 'toggleCloseOnEsc',
      label: 'Close On ESC',
      checked: this.closeOnEsc,
    },
    {
      id: 'toggleLockScroll',
      label: 'Lock Scroll',
      checked: this.lockScroll,
    },
  ]);

  private optionsMap: Record<string, WritableSignal<boolean>> = {
    toggleCloseOnBackdropClick: this._closeOnBackdropClick,
    toggleCloseOnEsc: this._closeOnEsc,
    toggleLockScroll: this._lockScroll,
  };

  toggleAccessibilityOptionState(optionKey: string) {
    try {
      this.optionsMap[optionKey].update((state) => !state);
    } catch {
      console.error('Accessibility ption does not exist');
    }
  }
}
