import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { Subscription } from 'rxjs';

import { environment } from '@env/environment';
import { authInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
    subscription.unsubscribe();
  });

  it('should add api key header', () => {
    const url = '/mock';
    subscription = httpClient.get(url).subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.headers.get('x-api-key')).toBe(environment.apiKey);
  });
});
