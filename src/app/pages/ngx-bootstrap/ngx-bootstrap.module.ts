

import {
  AlertsModule ,
  AccordionsModule,
  ButtonxModule,
  TablesModule,
  FileuploadModule
} from './modules';
import {
  NgxBootstrapComponent
} from './ngx-bootstrap.component';
import {
  NgxBootstrapRouting
} from './ngx-bootstrap.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    NgxBootstrapRouting,
    AccordionsModule,
    AlertsModule,
    ButtonxModule,
    TablesModule,
    FileuploadModule
  ],
  declarations: [NgxBootstrapComponent]
})
export class NgxBootstrapModule {}
