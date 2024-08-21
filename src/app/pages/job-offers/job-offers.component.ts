import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JOB_OFFERS } from '@app/core/consts/api';

import { JobOffersListComponent } from '@app/pages/job-offers/components/job-offers-list/job-offers-list.component';
import { UrlService } from '@app/shared/services/url.service';

@Component({
  selector: 'app-job-offers',
  standalone: true,
  imports: [JobOffersListComponent],
  templateUrl: './job-offers.component.html',
  styleUrl: './job-offers.component.scss',
})
export class JobOffersComponent {
  constructor(private http: HttpClient) {
    // TODO temporary console log
    this.http
      .get(UrlService.generateUrl(JOB_OFFERS))
      .subscribe((data) => console.log(data));
  }
}
