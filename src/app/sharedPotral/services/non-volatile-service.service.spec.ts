import { TestBed } from '@angular/core/testing';

import { NonVolatileServiceService } from './non-volatile-service.service';

describe('NonVolatileServiceService', () => {
  let service: NonVolatileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonVolatileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
