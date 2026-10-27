import { TestBed } from '@angular/core/testing';
import { AccessibilitySettingsService } from './accessibility-settings-service';

describe('AccessibilitySettingsService', () => {
  let service: AccessibilitySettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessibilitySettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
