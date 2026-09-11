import { TestBed } from '@angular/core/testing';
import { DisclosureAccessibilityStateService } from './disclosure-accessibility-state-service';

describe('DisclosureAccessibilityStateService', () => {
  let service: DisclosureAccessibilityStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisclosureAccessibilityStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
