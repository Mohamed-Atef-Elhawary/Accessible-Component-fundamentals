import { TestBed } from '@angular/core/testing';
import { DisclosureSectionsRegistryService } from './disclosure-sections-registry-service';

describe('DisclosureSectionsRegistryService', () => {
  let service: DisclosureSectionsRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisclosureSectionsRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
