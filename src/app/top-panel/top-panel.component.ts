import { Component, EventEmitter, Output } from '@angular/core';
import { SelectedView } from '../shared/models/selected-view';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
})
export class TopPanelComponent {
  @Output() menuClick = new EventEmitter();

  @Output() viewChange = new EventEmitter<SelectedView>();

  onMenuClick(): void {
    this.menuClick.emit();
  }

  onViewSelect(selectedView: SelectedView): void {
    this.viewChange.emit(selectedView);
  }
}
