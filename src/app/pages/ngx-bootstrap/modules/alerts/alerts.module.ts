import {
  AlertModule
} from 'ngx-bootstrap/alert';

import {
  CommonModule
} from '@angular/common';
import {
  AlertsComponent
} from './alerts.component';
import {
  AlertsRouting
} from './alerts.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    AlertsRouting,
    CommonModule,
    AlertModule.forRoot()
  ],
  declarations: [AlertsComponent],
  exports: [AlertsComponent]
})
export class AlertsModule {}
