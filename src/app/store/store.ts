import { Action, ActionReducer } from '@ngrx/store';

import { JobOffersEffects } from '@app/store/job-offers/effects';
import {
  jobOffersReducer,
  JobOffersState,
} from '@app/store/job-offers/reducers';

export interface AppState {
  jobOffers: JobOffersState;
}

export interface AppStore {
  jobOffers: ActionReducer<JobOffersState, Action>;
}

export const appStore: AppStore = {
  jobOffers: jobOffersReducer,
};

export const appEffects = [JobOffersEffects];
