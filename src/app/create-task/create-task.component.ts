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

    this.dateStart = new FormControl({
      value: moment(this.createTaskData.timeStart),
      disabled: true,
    });
    this.dateEnd = new FormControl(moment(this.createTaskData.timeEnd));
    this.timeStart = new FormControl(`${timeStart.hour()}:${timeStart.minute()}`);
    this.timeEnd = new FormControl(`${timeEnd.hour()}:${timeEnd.minute()}`);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    let result = {} as CreateTaskData;

    result.title = this.title.value;
    result.desc = this.description.value;
    result.timeStart = this.timeStart.value; // todo add date
    result.timeEnd = this.timeEnd.value; // todo add date

    this.dialogRef.close(result);
  }
}
