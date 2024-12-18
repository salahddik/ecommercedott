import { TestBed } from '@angular/core/testing';

import { CallproductsService } from './callproducts.service';

describe('CallproductsService', () => {
  let service: CallproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
