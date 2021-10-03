import { TestBed } from '@angular/core/testing';

import { BallparkService } from './ballpark.service';

describe('BallparkService', () => {
  let service: BallparkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallparkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
