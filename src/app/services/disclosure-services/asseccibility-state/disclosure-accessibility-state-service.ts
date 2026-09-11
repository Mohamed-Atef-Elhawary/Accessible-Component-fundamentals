import { Injectable, signal, WritableSignal } from '@angular/core';
import { AccessibilityOption } from '../../../interfaces/accessibility-options';

@Injectable({
  providedIn: 'root',
})
export class DisclosureAccessibilityStateService {
  private _multibleOpenSections = signal<boolean>(true);
  private _trapFocusInExpecndedSection = signal<boolean>(true);
  private _hideClosedSectionFromSR = signal<boolean>(true);

  multibleOpenSections = this._multibleOpenSections.asReadonly();
  trapFocusInExpecndedSection = this._trapFocusInExpecndedSection.asReadonly();
  hideClosedSectionFromSR = this._hideClosedSectionFromSR.asReadonly();

  accessibilityOptions = signal<AccessibilityOption[]>([
    {
      id: 'multibleOpenSections',
      checked: this.multibleOpenSections,
      label: 'Allow Multiple Open',
    },
    {
      id: 'trapFocusInExpecndedSection',
      checked: this.trapFocusInExpecndedSection,
      label: 'Trap Focus When Open',
    },
    {
      id: 'hideClosedSectionFromSR',
      checked: this.hideClosedSectionFromSR,
      label: 'Hide Closed Sections from SR',
    },
  ]);

  private optionsMap: Record<string, WritableSignal<boolean>> = {
    multibleOpenSections: this._multibleOpenSections,
    trapFocusInExpecndedSection: this._trapFocusInExpecndedSection,
    hideClosedSectionFromSR: this._hideClosedSectionFromSR,
  };

  toggleAccessibilityState(accessibilityFeature: string) {
    try {
      this.optionsMap[accessibilityFeature].update((state) => !state);
    } catch {
      console.error('Accessibility ption does not exist');
    }
  }
}
