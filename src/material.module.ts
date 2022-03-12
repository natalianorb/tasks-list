import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [
    A11yModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
  ]
})
export class MaterialExampleModule {}
