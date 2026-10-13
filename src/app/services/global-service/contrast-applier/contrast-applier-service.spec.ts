import { TestBed } from '@angular/core/testing';
import { ContrastApplierService } from './contrast-applier-service';

describe('ContrastApplierService', () => {
  let service: ContrastApplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContrastApplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
