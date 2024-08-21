import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ApiEnum } from '@app/core/enums/api';
import { JobOffer } from '@app/pages/job-offers/interfaces/job-offer.interface';
import { JobOffersResponse } from '@app/pages/job-offers/interfaces/job-offers-response.interface';
import { UrlService } from '@app/shared/services/url.service';

@Injectable({
  providedIn: 'root',
})
export class JobOffersService {
  constructor(private http: HttpClient) {}

  getJobOffers(): Observable<JobOffer[]> {
    const url = UrlService.generateUrl(ApiEnum.JOB_OFFERS);

    return this.http
      .get(url)
      .pipe(map((res: unknown) => (res as JobOffersResponse).jobs || []));
  }
}
