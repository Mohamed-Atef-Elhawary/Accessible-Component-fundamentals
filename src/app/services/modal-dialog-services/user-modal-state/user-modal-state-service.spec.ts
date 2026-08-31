import { TestBed } from '@angular/core/testing';
import { UserModalStateService } from './user-modal-state-service';

describe('UserModalStateService', () => {
  let service: UserModalStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserModalStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
