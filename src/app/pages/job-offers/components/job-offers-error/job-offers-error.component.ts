import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectJobOffersError } from '@app/store/job-offers/selectors';
import { AppState } from '@app/store/store';

@Component({
  selector: 'app-job-offers-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-offers-error.component.html',
  styleUrl: './job-offers-error.component.scss',
})
export class JobOffersError {
  jobOffersError$?: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.jobOffersError$ = this.store.select(selectJobOffersError);
  }
}
