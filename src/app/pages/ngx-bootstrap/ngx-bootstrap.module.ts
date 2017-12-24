import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  NgxBootstrapComponent
} from './ngx-bootstrap.component';
import {
  NgxBootstrapRouting
} from './ngx-bootstrap.routing';

import {
  AccordionModule,
  AlertModule
} from 'ngx-bootstrap';

import {
  AccordionComponent,
  AlertsComponent
} from './components';

@NgModule({
  imports: [
    NgxBootstrapRouting,
    CommonModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [NgxBootstrapComponent,
    AccordionComponent,
    AlertsComponent
  ]
})
export class NgxBootstrapModule {}
