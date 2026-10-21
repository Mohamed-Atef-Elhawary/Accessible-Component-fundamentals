import { Injectable, signal } from '@angular/core';
import { MultipleOpenSectionsDirective } from '../../../../directives/disclosure-directives/multiple-open-sections-directive/multiple-open-sections-directive';

@Injectable({
  providedIn: 'root',
})
export class DisclosureSectionsRegistryService {
  private _multipleOpenDirectiveRegistry = signal<Set<MultipleOpenSectionsDirective>>(new Set());
  readonly multipleOpenDirectiveRegistry = this._multipleOpenDirectiveRegistry.asReadonly();

  addRegistry(newDirective: MultipleOpenSectionsDirective): void {
    this._multipleOpenDirectiveRegistry.update((oldRegistrySet) => {
      const newSet = new Set([...oldRegistrySet, newDirective]);
      return newSet;
    });
  }

  deleteRegistry(directive: MultipleOpenSectionsDirective): void {
    this._multipleOpenDirectiveRegistry.update((oldRegistrySet) => {
      const newSet = new Set(oldRegistrySet);
      newSet.delete(directive);
      return newSet;
    });
  }
  closeOtherRegistries(currentDirective: MultipleOpenSectionsDirective): void {
    this._multipleOpenDirectiveRegistry().forEach((directive) => {
      if (directive !== currentDirective) {
        directive.setOpenStateToFalse();
      }
    });
  }
}
