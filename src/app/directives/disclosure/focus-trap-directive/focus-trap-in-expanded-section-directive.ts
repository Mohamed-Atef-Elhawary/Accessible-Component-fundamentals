import { Directive, ElementRef, inject, input, DOCUMENT, signal, output } from '@angular/core';
import { FocusableElement } from '../../../types/generalTypes';

@Directive({
  selector: '[appFocusTrapInExpandedSectionDirective]',
  host: {
    '(keydown.tab)': 'tabHandler($event)',
    '(keydown.shift.tab)': 'shiftTabHandler($event)',
    '(keydown.escape)': 'escapeHandler()',
  },
})
export class FocusTrapInExpandedSectionDirective {
  element = inject(ElementRef);
  doc = inject(DOCUMENT);
  enable = input.required<boolean>();
  close = output<void>();

  getFocusableElements() {
    const focusableElements: FocusableElement[] = [
      ...this.element.nativeElement.querySelectorAll('button, input'),
    ].filter((element) => !element.disabled);
    return focusableElements;
  }

  tabHandler(event: Event) {
    if (!this.enable()) {
      return;
    }

    const focusableElements = this.getFocusableElements();

    if (this.doc.activeElement === focusableElements[focusableElements.length - 1]) {
      event.preventDefault();
      focusableElements[0].focus();
    }
  }

  shiftTabHandler(event: Event) {
    if (!this.enable()) {
      return;
    }
    const focusableElements = this.getFocusableElements();

    if (this.doc.activeElement === focusableElements[0]) {
      event.preventDefault();
      focusableElements[focusableElements.length - 1].focus();
    }
  }

  escapeHandler() {
    if (!this.enable()) {
      return;
    }
    this.close.emit();
  }
}
