import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getJobOffers } from '@app/store/job-offers/actions';
import { selectJobOffers } from '@app/store/job-offers/selectors';
import { JobOffer } from '@app/pages/job-offers/interfaces/job-offer.interface';
import { AppState } from '@app/store/store';
import { JobOffersError } from '@app/pages/job-offers/components/job-offers-error/job-offers-error.component';

@Component({
  selector: 'app-job-offers-list',
  standalone: true,
  imports: [CommonModule, JobOffersListComponent, JobOffersError],
  templateUrl: './job-offers-list.component.html',
  styleUrl: './job-offers-list.component.scss',
})
export class JobOffersListComponent {
  jobOffers$?: Observable<JobOffer[]>;

  constructor(private store: Store<AppState>) {
    this.jobOffers$ = this.store.select(selectJobOffers);
    this.getJobOffers();
  }

  private getJobOffers(): void {
    this.store.dispatch(getJobOffers());
  }
}
