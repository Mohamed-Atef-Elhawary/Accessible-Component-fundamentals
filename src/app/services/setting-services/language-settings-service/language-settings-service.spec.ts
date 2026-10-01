import { TestBed } from '@angular/core/testing';
import { LanguageSettingsService } from './language-settings-service';

describe('LanguageSettingsService', () => {
  let service: LanguageSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
