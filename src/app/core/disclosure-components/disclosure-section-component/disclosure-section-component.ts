import { Component, input, signal, viewChild } from '@angular/core';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  imports: [FontAwesomeModule],
  selector: 'app-disclosure-section-component',
  styleUrl: './disclosure-section-component.css',
  templateUrl: './disclosure-section-component.html',
})
export class DisclosureSectionComponent {
  chevronDown = faChevronDown;
  chevronRight = faChevronRight;
  openState = signal<boolean>(true);
  title = input.required<string>();
  toggleState() {
    this.openState.update((state) => !state);
  }
}
