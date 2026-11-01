import { TestBed } from '@angular/core/testing';
import { TextSizeSettingsService } from './text-size-settings-service';

describe('TextSizeSettingsService', () => {
  let service: TextSizeSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSizeSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
