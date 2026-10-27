import { TestBed } from '@angular/core/testing';
import { LineHeightSettingsService } from './line-height-settings-service';

describe('LineHeightSettingsService', () => {
  let service: LineHeightSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineHeightSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
