import { Injectable, signal, WritableSignal } from '@angular/core';
import { AccessibilityOption } from '../../../interfaces/accessibility-options';

@Injectable({
  providedIn: 'root',
})
export class DisclosureAccessibilityStateService {
  private _multipleOpenSections = signal<boolean>(true);
  private _trapFocusInExpandedSection = signal<boolean>(true);
  private _hideClosedSectionFromSR = signal<boolean>(true);

  multipleOpenSections = this._multipleOpenSections.asReadonly();
  trapFocusInExpandedSection = this._trapFocusInExpandedSection.asReadonly();
  hideClosedSectionFromSR = this._hideClosedSectionFromSR.asReadonly();

  accessibilityOptions = signal<AccessibilityOption[]>([
    {
      id: 'multipleOpenSections',
      checked: this.multipleOpenSections,
      label: 'Allow Multiple Open',
    },
    {
      id: 'trapFocusInExpandedSection',
      checked: this.trapFocusInExpandedSection,
      label: 'Trap Focus When Open',
    },
    {
      id: 'hideClosedSectionFromSR',
      checked: this.hideClosedSectionFromSR,
      label: 'Hide Closed Sections from SR',
    },
  ]);

  private optionsMap: Record<string, WritableSignal<boolean>> = {
    multipleOpenSections: this._multipleOpenSections,
    trapFocusInExpandedSection: this._trapFocusInExpandedSection,
    hideClosedSectionFromSR: this._hideClosedSectionFromSR,
  };

  toggleAccessibilityOptionState(optionKey: string) {
    try {
      this.optionsMap[optionKey].update((state) => !state);
    } catch {
      console.error('Accessibility option does not exist');
    }
  }
}
