import { TestBed } from '@angular/core/testing';

import { FurService } from './fur.service';

describe('FurService', () => {
  let service: FurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
