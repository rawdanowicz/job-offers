import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { JobOffersService } from './job-offers.service';

describe('JobOffersService', () => {
  let service: JobOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpClient, HttpHandler] });
    service = TestBed.inject(JobOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
