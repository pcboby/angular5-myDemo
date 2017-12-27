import {
  CommonModule
} from '@angular/common';
import {
  SilderComponent
} from './silder.component';
import {
  SilderRouting
} from './silder.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    SilderRouting,
    CommonModule
  ],
  declarations: [SilderComponent],
  exports: [SilderComponent]
})
export class SilderModule {}
