import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersPageComponent } from './job-offers.component';

describe('JobOffersPageComponent', () => {
  let component: JobOffersPageComponent;
  let fixture: ComponentFixture<JobOffersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobOffersPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobOffersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
