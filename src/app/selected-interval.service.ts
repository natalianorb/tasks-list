import { Injectable } from '@angular/core';
import SelectedView from './models/selectedView';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedIntervalService {
  now = moment(); // todo add changing every second

  lastSelectedDay: moment.Moment = moment().startOf('date');

  dayHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  selectedView$: BehaviorSubject<SelectedView> = new BehaviorSubject('day' as SelectedView);

  selectedInterval: moment.Moment[] = [];

  constructor() {
    this.selectedView$.subscribe((view: SelectedView) => {
      switch (view) {
        case 'day':
          this.selectedInterval = this.createDayInterval(this.lastSelectedDay);
          break;
        case '3 days':
          this.selectedInterval = this.create3daysInterval(this.lastSelectedDay);
          break;
        case 'week':
          this.selectedInterval = this.createWeekInterval(this.lastSelectedDay);
          break;
      }
    });
  }

  createDayInterval(day: moment.Moment) {
    const startOfDay = moment(day).startOf('date');
    const endOfDay = moment(day).endOf('date');

    return [startOfDay, endOfDay];
  }

  create3daysInterval(day: moment.Moment) {
    const startOfDay = moment(day).startOf('date');
    const endOf3Days = moment(day).endOf('date').add(2, 'days');

    return [startOfDay, endOf3Days];
  }

  createWeekInterval(day: moment.Moment) {
    const startOfDay = moment(day).startOf('week');
    const endOfWeek = moment(day).endOf('week');

    return [startOfDay, endOfWeek];
  }
}
