import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { OneDayComponent } from './one-day/one-day.component';
import { ThreeDaysComponent } from './three-days/three-days.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    OneDayComponent,
    ThreeDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
