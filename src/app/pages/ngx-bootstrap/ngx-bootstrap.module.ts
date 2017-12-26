import { TablesModule } from './modules/tables/tables.module';
import { AlertsModule ,
  AccordionsModule
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
    TablesModule
  ],
  declarations: [NgxBootstrapComponent]
})
export class NgxBootstrapModule {}
