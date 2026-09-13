import { Component, signal, viewChild } from '@angular/core';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  imports: [FontAwesomeModule],
  selector: 'app-disclosure-section-component',
  styleUrl: './disclosure-section-component.css',
  templateUrl: './disclosure-section-component.html',
})
export class DisclosureSectionComponent {
  openState = signal<boolean>(true);
  chevronDown = faChevronDown;
  chevronRight = faChevronRight;
  toggleState() {
    this.openState.update((state) => !state);
  }
}
