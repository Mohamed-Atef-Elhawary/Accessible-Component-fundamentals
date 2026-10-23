import { computed, Directive, ElementRef, inject, signal } from '@angular/core';
import { DisclosureAccessibilityStateService } from '../../../services/disclosure-services/accessibility-services/disclosure-accessibility-state/disclosure-accessibility-state-service';
import { DisclosureSectionsRegistryService } from '../../../services/disclosure-services/accessibility-services/disclosure-sections-registry/disclosure-sections-registry-service';

@Directive({
  selector: '[appMultipleOpenSectionsDirective]',
  standalone: true,
})
export class MultipleOpenSectionsDirective {
  private _disclosureAccessibilityStateService = inject(DisclosureAccessibilityStateService);
  private _disclosureSectionsRegistryService = inject(DisclosureSectionsRegistryService);

  private _isOpenState = signal(false);
  readonly isOpenState = this._isOpenState.asReadonly();

  multipleOpenSections = computed(() =>
    this._disclosureAccessibilityStateService.multipleOpenSections(),
  );

  ngOnInit() {
    this._disclosureSectionsRegistryService.addRegistry(this);
  }

  toggleOpenState() {
    this._isOpenState.update((state) => !state);
    if (this._isOpenState() && !this.multipleOpenSections()) {
      this.closeOtherRegistries();
    }
  }

  closeOtherRegistries() {
    this._disclosureSectionsRegistryService.closeOtherRegistries(this);
  }
  setOpenStateToFalse() {
    this._isOpenState.set(false);
  }

  ngOnDestroy() {
    this._disclosureSectionsRegistryService.deleteRegistry(this);
  }
}
