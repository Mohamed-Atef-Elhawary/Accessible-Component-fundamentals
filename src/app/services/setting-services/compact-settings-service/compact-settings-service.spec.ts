import { TestBed } from '@angular/core/testing';
import { CompactSettingsService } from './compact-settings-service';

describe('CompactSettingsService', () => {
  let service: CompactSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompactSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
