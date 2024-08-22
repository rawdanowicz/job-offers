import { Routes } from '@angular/router';

import { RoutesEnum } from '@app/core/enums/routes';
import { JobOffersComponent } from '@app/pages/job-offers/job-offers.component';

export const routes: Routes = [
  { path: RoutesEnum.JOB_OFFERS, component: JobOffersComponent },
  { path: RoutesEnum.WRONG_PATH, redirectTo: RoutesEnum.JOB_OFFERS },
];
