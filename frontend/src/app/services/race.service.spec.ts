import { TestBed } from '@angular/core/testing';

import { RaceService } from './race.service';

describe('RacaService', () => {
  let service: RaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
