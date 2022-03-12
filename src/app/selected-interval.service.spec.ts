import { TestBed } from '@angular/core/testing';

import { SelectedIntervalService } from './selected-interval.service';

describe('SelectedTimeService', () => {
  let service: SelectedIntervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedIntervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
