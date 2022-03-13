import { Injectable } from '@angular/core';
import { INITIAL_VIEW, SelectedView } from '../models/selected-view';
import * as moment from 'moment';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedIntervalService {
  now = moment(); // todo add changing every second

  lastSelectedDay: moment.Moment = moment().startOf('date');

  dayHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  selectedView$: BehaviorSubject<SelectedView> = new BehaviorSubject(INITIAL_VIEW);

  selectedInterval$: Observable<moment.Moment[]>;

  constructor() {
    this.selectedInterval$ = this.selectedView$.pipe(
      map((view: SelectedView) => {
        let selectedInterval;

        switch (view) {
          case 'day':
            selectedInterval = this.createDayInterval(this.lastSelectedDay);
            break;
          case '3 days':
            selectedInterval = this.create3daysInterval(this.lastSelectedDay);
            break;
          case 'week':
            selectedInterval = this.createWeekInterval(this.lastSelectedDay);
            break;
        }

        return selectedInterval;
      }),
    );
  }

  createDayInterval(day: moment.Moment) {
    const startOfDay = moment(day).startOf('date');
    const endOfDay = moment(day).endOf('date');

    return [startOfDay, endOfDay];
  }

  create3daysInterval(day: moment.Moment) {
    const firstDay = moment(day).startOf('date');
    const secondDay = moment(firstDay).add(1, 'days');
    const thirdDay = moment(firstDay).add(2, 'days');

    return [firstDay, secondDay, thirdDay];
  }

  createWeekInterval(day: moment.Moment) {
    const startOfDay = moment(day).startOf('week');
    const endOfWeek = moment(day).endOf('week');

    return [startOfDay, endOfWeek];
  }
}
