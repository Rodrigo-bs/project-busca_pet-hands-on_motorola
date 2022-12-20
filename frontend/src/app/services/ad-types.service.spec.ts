import { TestBed } from '@angular/core/testing';

import { AdTypesService } from './ad-types.service';

describe('AdTypesService', () => {
  let service: AdTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
