import { AppState } from '@app/store/store';

export const selectJobOffers = (state: AppState) => state.jobOffers.jobOffers;
export const selectJobOffersError = (state: AppState) => state.jobOffers.error;
