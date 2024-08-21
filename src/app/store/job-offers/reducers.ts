import { createReducer, on } from '@ngrx/store';

import { getJobOffersFailure, getJobOffersSuccess } from './actions';
import { JobOffer } from '@app/pages/job-offers/interfaces/job-offer.interface';

export interface JobOffersState {
  jobOffers: JobOffer[];
  error: string;
}

export const initialState: JobOffersState = {
  jobOffers: [],
  error: '',
};

export const jobOffersReducer = createReducer(
  initialState,
  on(getJobOffersSuccess, (state, { jobOffers }) => ({ ...state, jobOffers })),
  on(getJobOffersFailure, (state, { error }) => ({ ...state, error }))
);
