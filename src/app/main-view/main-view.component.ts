import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { INITIAL_VIEW, SelectedView } from '../shared/models/selected-view';
import * as moment from 'moment';
import { SelectedIntervalService } from '../shared/services/selected-interval.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnDestroy {
  @Input() selectedView: SelectedView | null = INITIAL_VIEW;

  @Output() hourClick = new EventEmitter<moment.Moment>();

  subscriptions: Subscription[] = [];

  selectedInterval: moment.Moment[] = [];

  constructor(selectedIntervalService: SelectedIntervalService) {
    this.subscriptions.push(
      selectedIntervalService.selectedInterval$.subscribe((selectedInterval) => {
        this.selectedInterval = selectedInterval;
      }),
    );
  }

  onHourClick(hour: moment.Moment) {
    this.hourClick.emit(hour);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    });
  }
}
