import {
  AccordionModule
} from 'ngx-bootstrap/accordion';
import {
  CommonModule
} from '@angular/common';
import {
  AccordionsComponent
} from './accordions.component';
import {
  AccordionsRouting
} from './accordions.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    AccordionsRouting,
    CommonModule,
    AccordionModule.forRoot()
  ],
  declarations: [AccordionsComponent],
  exports: [AccordionsComponent]
})
export class AccordionsModule {}
