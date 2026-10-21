import {
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FocusTrapInExpandedSectionDirective } from '../../../directives/disclosure-directives/focus-trap-directive/focus-trap-in-expanded-section-directive';
import { DisclosureAccessibilityStateService } from '../../../services/disclosure-services/accessibility-services/disclosure-accessibility-state/disclosure-accessibility-state-service';

let counter = 1;
@Component({
  imports: [FontAwesomeModule, FocusTrapInExpandedSectionDirective],
  selector: 'app-disclosure-section-component',
  styleUrl: './disclosure-section-component.css',
  templateUrl: './disclosure-section-component.html',
  // hostDirectives: [MultipleOpenSectionsDirective],
})
export class DisclosureSectionComponent {
  disclosureAccessService = inject(DisclosureAccessibilityStateService);

  hasOpenState = input.required<boolean>();

  headerButton = viewChild<ElementRef>('headerButton');

  enableTrapFocus = computed(() => {
    const isTrapFocus = this.disclosureAccessService.trapFocusInExpandedSection();
    const hasOpenState = this.hasOpenState();
    return isTrapFocus && hasOpenState;
  });

  switchOpenState = output<void>();
  title = input.required<string>();

  chevronDown = faChevronDown;
  chevronRight = faChevronRight;
  sectionId = `section ${counter++}`;
  contentId = `content of ${this.sectionId}`;

  toggleState() {
    this.headerButton()?.nativeElement.focus();
    this.switchOpenState.emit();
  }
}
