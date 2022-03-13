import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectedIntervalService } from '../shared/services/selected-interval.service';
import * as moment from 'moment';
import { ADD_TASK_BUTTON_HEIGHT } from '../shared/constants/add-task-button-height';

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.scss'],
  styles: [
    `
      .create-button {
        height: ${ADD_TASK_BUTTON_HEIGHT};
      }
    `,
  ],
})
export class OneDayComponent {
  @Input() day: moment.Moment;

  @Output() hourClick = new EventEmitter<moment.Moment>();

  hours: number[] = [];

  constructor(selectedIntervalService: SelectedIntervalService) {
    this.day = selectedIntervalService.now;
    this.hours = selectedIntervalService.dayHours;
  }

  onHourClick(hour: number) {
    const targetTime = moment(this.day);

    targetTime.hour(hour);
    this.hourClick.emit(targetTime);
  }
}
