import { TestBed } from '@angular/core/testing';
import { DensitySettingsService } from './density-settings-service';

describe('DensitySettingsService', () => {
  let service: DensitySettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DensitySettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
