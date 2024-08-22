import { Component } from '@angular/core';

import { JobOffersListComponent } from '@app/pages/job-offers/components/job-offers-list/job-offers-list.component';

@Component({
  selector: 'app-job-offers',
  standalone: true,
  imports: [JobOffersListComponent],
  templateUrl: './job-offers.component.html',
  styleUrl: './job-offers.component.scss',
})
export class JobOffersComponent {}
