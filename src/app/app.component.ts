import { Component } from '@angular/core';
import { SelectedView } from './shared/models/selected-view';
import { SelectedIntervalService } from './shared/services/selected-interval.service';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from './create-task/create-task.component';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tasks-list';

  isOpen: boolean = false;

  selectedView$: BehaviorSubject<SelectedView>;

  constructor(selectedIntervalService: SelectedIntervalService, public dialog: MatDialog) {
    this.selectedView$ = selectedIntervalService.selectedView$;
  }

  openDialog(time: moment.Moment) {
    const dialogConfig = {
      maxWidth: '360px',
      width: '360px',
      data: {
        title: '',
        desc: '',
        timeStart: time,
        timeEnd: moment(time).add(1, 'hour'),
      },
    };
    const dialogRef = this.dialog.open(CreateTaskComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  onMenuClick() {
    this.isOpen = !this.isOpen;
  }

  onViewChange(selectedView: SelectedView) {
    this.selectedView$.next(selectedView);
  }
}
