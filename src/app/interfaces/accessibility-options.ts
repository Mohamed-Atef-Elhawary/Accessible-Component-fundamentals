import { Signal } from '@angular/core';

export interface AccessibilityOption {
  id: string;
  label: string;
  checked: Signal<boolean>;
}
