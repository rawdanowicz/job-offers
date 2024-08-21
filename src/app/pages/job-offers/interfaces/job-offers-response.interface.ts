import { JobOffer } from './job-offer.interface';

export interface JobOffersResponse {
  jobs: JobOffer[];
  count: number;
  limit: number;
  offset: number;
}
