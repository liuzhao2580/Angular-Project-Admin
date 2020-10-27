import { TestBed } from '@angular/core/testing';

import { BaseStoreService } from './base-store.service';

describe('BaseServiceService', () => {
  let service: BaseStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
