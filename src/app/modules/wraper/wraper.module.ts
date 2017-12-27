import {
  CommonModule
} from '@angular/common';
import {
  WraperComponent
} from './wraper.component';
import {
  WraperRouting
} from './wraper.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    WraperRouting,
    CommonModule
  ],
  declarations: [WraperComponent],
  exports: [WraperComponent]
})
export class WraperModule {}
