import { TestBed } from '@angular/core/testing';
import { ModalAccessibilityStateService } from './modal-accessibility-state-service';

describe('AccessibilityStateService', () => {
  let service: ModalAccessibilityStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAccessibilityStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
