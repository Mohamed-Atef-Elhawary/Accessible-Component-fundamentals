import { TestBed } from '@angular/core/testing';
import { DarkApplierService } from './dark-applier-service';

describe('DarkApplierService', () => {
  let service: DarkApplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkApplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
