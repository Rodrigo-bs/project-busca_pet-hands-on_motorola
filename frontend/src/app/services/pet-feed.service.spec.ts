import { TestBed } from '@angular/core/testing';

import { PetFeedService } from './pet-feed.service';

describe('PetFeedService', () => {
  let service: PetFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
