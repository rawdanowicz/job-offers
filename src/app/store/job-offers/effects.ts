import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, catchError, of, switchMap, Observable } from 'rxjs';

import { JobOffersService } from '@app/pages/job-offers/services/job-offers.service';
import { ActionsEnum } from '@app/core/enums/actions';
import {
  getJobOffersFailure,
  getJobOffersSuccess,
} from '@app/store/job-offers/actions';

@Injectable()
export class JobOffersEffects {
  getJobOffers$: Observable<unknown>;

  constructor(
    private actions$: Actions,
    private jobOffersService: JobOffersService
  ) {
    this.getJobOffers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ActionsEnum.GET_JOB_OFFERS),
        switchMap(() =>
          this.jobOffersService.getJobOffers().pipe(
            map((jobOffers) => getJobOffersSuccess({ jobOffers })),
            catchError(({ message }) =>
              of(getJobOffersFailure({ error: message }))
            )
          )
        )
      )
    );
  }
}
