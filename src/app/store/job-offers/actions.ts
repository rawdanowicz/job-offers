import { createAction, props } from '@ngrx/store';

import { ActionsEnum } from '@app/core/enums/actions';
import { JobOffer } from '@app/pages/job-offers/interfaces/job-offer.interface';

export const getJobOffers = createAction(ActionsEnum.GET_JOB_OFFERS);
export const getJobOffersSuccess = createAction(
  ActionsEnum.GET_JOB_OFFERS_SUCCESS,
  props<{ jobOffers: JobOffer[] }>()
);
export const getJobOffersFailure = createAction(
  ActionsEnum.GET_JOB_OFFERS_FAILURE,
  props<{ error: string }>()
);
