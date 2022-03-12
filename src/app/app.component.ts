import { Component } from '@angular/core';
import SelectedView from './models/selectedView';
import { SelectedIntervalService } from './selected-interval.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tasks-list';

  isOpen: boolean = false;

  selectedView$: BehaviorSubject<SelectedView>;

  constructor(selectedIntervalService: SelectedIntervalService) {
    this.selectedView$ = selectedIntervalService.selectedView$;
  }

  onMenuClick() {
    this.isOpen = !this.isOpen;
  }

  onViewChange(selectedView: SelectedView) {
    this.selectedView$.next(selectedView);
  }
}
