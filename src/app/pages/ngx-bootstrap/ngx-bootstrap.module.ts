
import { BreadcrumbModule } from './../../modules';


import {
  AlertsModule ,
  AccordionsModule,
  ButtonxModule,
  TabsxModule,
  CarouselxModule,
  CollapsexModule,
  ModalxModule,
  TypeaheadxModule,
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
    BreadcrumbModule,
    AccordionsModule,
    AlertsModule,
    ButtonxModule,
    TabsxModule,
    CarouselxModule,
    CollapsexModule,
    ModalxModule,
    TypeaheadxModule,
    TablesModule,
    FileuploadModule
  ],
  declarations: [NgxBootstrapComponent]
})
export class NgxBootstrapModule {}
