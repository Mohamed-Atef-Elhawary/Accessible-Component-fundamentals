import { TestBed } from '@angular/core/testing';
import { AccessibilityStateService } from './accessibility-state-service';

describe('AccessibilityStateService', () => {
  let service: AccessibilityStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessibilityStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
