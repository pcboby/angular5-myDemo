import { CommonModule } from '@angular/common';
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
    CommonModule
  ],
  declarations: [AccordionsComponent]
})
export class AccordionsModule {}
