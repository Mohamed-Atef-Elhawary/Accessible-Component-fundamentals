import { Component, computed, input, output, signal } from '@angular/core';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

let counter = 1;
@Component({
  imports: [FontAwesomeModule],
  selector: 'app-disclosure-section-component',
  styleUrl: './disclosure-section-component.css',
  templateUrl: './disclosure-section-component.html',
})
export class DisclosureSectionComponent {
  chevronDown = faChevronDown;
  chevronRight = faChevronRight;
  title = input.required<string>();
  sectionId = `section ${counter++}`;
  contentId = `content of ${this.sectionId}`;

  isOpenState = input.required<boolean>();
  switchOpenState = output<void>();

  toggleState() {
    this.switchOpenState.emit();
  }
}
