import { Component, EventEmitter, Output } from '@angular/core';
import { SelectedIntervalService } from '../selected-interval.service';
import * as moment from 'moment';

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.scss'],
})
export class OneDayComponent {
  @Output() hourClick = new EventEmitter<moment.Moment>();

  hours: number[] = [];

  lastSelectedDay: moment.Moment;

  constructor(selectedIntervalService: SelectedIntervalService) {
    this.lastSelectedDay = selectedIntervalService.lastSelectedDay;
    this.hours = selectedIntervalService.dayHours;
  }

  onHourClick(hour: number) {
    const targetTime = moment(this.lastSelectedDay);

    targetTime.hour(hour);
    this.hourClick.emit(targetTime);
  }
}
