import { TestBed } from '@angular/core/testing';
import { CompactApplierService } from './compact-applier-service';

describe('CompactApplierService', () => {
  let service: CompactApplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompactApplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
