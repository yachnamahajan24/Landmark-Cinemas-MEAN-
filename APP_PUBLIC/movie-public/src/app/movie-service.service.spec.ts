import { TestBed } from '@angular/core/testing';

import { MovieDataService } from './movie-service.service';

describe('MovieServiceService', () => {
  let service: MovieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
