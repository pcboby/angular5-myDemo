import {
  CommonModule
} from '@angular/common';
import {
  DashboardRouting
} from './dashboard.routing';

import {
  NgModule
} from '@angular/core';

import {
  DashboardComponent
} from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
