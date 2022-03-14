import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';

export interface CreateTaskData {
  timeStart: moment.Moment;
  timeEnd: moment.Moment;
  title: string;
  desc: string;
}

interface DayTime {
  hours: number;
  minutes: number;
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  title = new FormControl('', Validators.required);

  description = new FormControl('');

  dateStart: FormControl = new FormControl();

  dateEnd: FormControl = new FormControl();

  timeStart: FormControl = new FormControl();

  timeEnd: FormControl = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public createTaskData: CreateTaskData,
  ) {
    const timeStart = moment(this.createTaskData.timeStart);
    const timeEnd = moment(this.createTaskData.timeEnd);

    this.timeStart = new FormControl(timeStart.format('HH:mm'));
    this.timeEnd = new FormControl(timeEnd.format('HH:mm'));
    this.dateStart = new FormControl({
      value: moment(this.createTaskData.timeStart),
      disabled: true,
    });
    this.dateEnd = new FormControl(moment(this.createTaskData.timeEnd));
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    let result = {} as CreateTaskData;
    const selectedStartTime = this.parseTime(this.timeStart.value);
    const selectedEndTime = this.parseTime(this.timeEnd.value);

    result.title = this.title.value;
    result.desc = this.description.value;
    result.timeStart = this.dateStart.value
      .set('hour', selectedStartTime.hours)
      .set('minute', selectedStartTime.minutes);
    result.timeEnd = this.dateEnd.value
      .set('hour', selectedEndTime.hours)
      .set('minute', selectedEndTime.minutes);

    this.dialogRef.close(result);
  }

  parseTime(timeString: string): DayTime {
    const arr = timeString.split(':');
    const hours = Number(arr[0]);
    const minutes = arr[1] ? Number(arr[1]) : 0;

    return {
      hours,
      minutes,
    };
  }
}
