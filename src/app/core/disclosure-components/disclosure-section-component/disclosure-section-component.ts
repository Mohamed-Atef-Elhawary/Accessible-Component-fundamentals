import { Component, computed, ElementRef, inject, input, viewChild } from '@angular/core';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FocusTrapInExpandedSectionDirective } from '../../../directives/disclosure-directives/focus-trap-directive/focus-trap-in-expanded-section-directive';
import { DisclosureAccessibilityStateService } from '../../../services/disclosure-services/accessibility-services/disclosure-accessibility-state/disclosure-accessibility-state-service';
import { MultipleOpenSectionsDirective } from '../../../directives/disclosure-directives/multiple-open-sections-directive/multiple-open-sections-directive';

let counter = 1;
@Component({
  imports: [FontAwesomeModule, FocusTrapInExpandedSectionDirective],
  selector: 'app-disclosure-section-component',
  styleUrl: './disclosure-section-component.css',
  templateUrl: './disclosure-section-component.html',
  hostDirectives: [MultipleOpenSectionsDirective],
})
export class DisclosureSectionComponent {
  chevronDown = faChevronDown;
  chevronRight = faChevronRight;
  sectionId = `section ${counter++}`;
  contentId = `content of ${this.sectionId}`;

  disclosureAccessService = inject(DisclosureAccessibilityStateService);
  multipleOpenSectionsDirective = inject(MultipleOpenSectionsDirective);

  title = input.required<string>();
  headerButton = viewChild<ElementRef>('headerButton');

  hasOpenState = computed(() => this.multipleOpenSectionsDirective.isOpenState());

  enableTrapFocus = computed(() => {
    const isTrapFocus = this.disclosureAccessService.trapFocusInExpandedSection();
    const hasOpenState = this.multipleOpenSectionsDirective.isOpenState();
    return isTrapFocus && hasOpenState;
  });

  toggleState() {
    this.multipleOpenSectionsDirective.toggleOpenState();
  }
  focusOnHeader() {
    this.headerButton()?.nativeElement.focus();
    this.multipleOpenSectionsDirective.setOpenStateToFalse();
  }
}
