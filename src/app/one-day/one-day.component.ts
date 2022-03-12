import { Component } from '@angular/core';

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.scss']
})
export class OneDayComponent {
  hours: number[] = [];

  constructor() {
  }

}
