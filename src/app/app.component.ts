import { Component } from '@angular/core';
import SelectedView from "./models/selectedView";
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tasks-list';
  isOpen: boolean = false;
  selectedView: SelectedView = 'day';
  now = moment(); // todo add changing every second
  selectedInterval: moment.Moment[];

  constructor() {
    const startOfDay = this.now.startOf('day');
    const endOfDay = this.now.endOf('day');

    this.selectedInterval = [startOfDay, endOfDay];
  }

  onMenuClick() {
    this.isOpen = !this.isOpen;
  }

  onViewChange(selectedView: SelectedView) {
    this.selectedView = selectedView;
    // todo add selectedInterval's dependency
  }
}
