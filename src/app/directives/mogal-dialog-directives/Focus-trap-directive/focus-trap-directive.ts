import { Directive, ElementRef, input, OnChanges, OnInit, signal } from '@angular/core';
import { FocusableElement } from '../../../types/generalTypes';

@Directive({
  selector: '[appFocusTrapDirective]',
  host: {
    '(keydown.tab)': 'onTabClick($event)',
  },
})
export class FocusTrapDirective implements OnChanges {
  focusableElements = signal<FocusableElement[]>([]);
  firstFocusedElement = input.required<FocusableElement>();
  constructor(private elementRef: ElementRef) {}
  ngOnChanges() {
    const focusableElements = this.elementRef.nativeElement.querySelectorAll('input,button');
    this.focusableElements.set(focusableElements);
    if (this.firstFocusedElement()) {
      this.firstFocusedElement().focus();
    }
  }
  onTabClick(event: Event) {
    event.preventDefault();
    const focusableElements: (HTMLInputElement | HTMLButtonElement)[] = [
      ...this.focusableElements(),
    ];
    const focusedElement = document.activeElement as FocusableElement;
    const focusedElementIndex = focusableElements.indexOf(focusedElement);
    let nextFocusedElementIndex: number = 0;

    for (let [index, elemant] of focusableElements.entries()) {
      nextFocusedElementIndex = (focusedElementIndex + 1 + index) % focusableElements.length;
      if (!focusableElements[nextFocusedElementIndex].disabled) {
        break;
      }
    }

    focusableElements[nextFocusedElementIndex].focus();
  }
}
