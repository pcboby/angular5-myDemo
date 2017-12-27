import {
  CommonModule
} from '@angular/common';
import {
  QuickbarComponent
} from './quickbar.component';
import {
  QuickbarRouting
} from './quickbar.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    QuickbarRouting,
    CommonModule
  ],
  declarations: [QuickbarComponent],
  exports: [QuickbarComponent]
})
export class QuickbarModule {}
