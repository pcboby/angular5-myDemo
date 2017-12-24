import { FormsModule } from '@angular/forms';
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
  AlertModule,
  PaginationModule
} from 'ngx-bootstrap';

import { Ng2TableModule } from 'ng2-table/ng2-table';

import {
  TablesComponent,
  AccordionComponent,
  AlertsComponent
} from './components';

@NgModule({
  imports: [
    NgxBootstrapRouting,
    CommonModule,
    FormsModule,
    Ng2TableModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [NgxBootstrapComponent,
    TablesComponent,
    AccordionComponent,
    AlertsComponent
  ]
})
export class NgxBootstrapModule {}
