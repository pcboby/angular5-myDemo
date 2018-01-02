import {CollapseModule} from 'ngx-bootstrap/collapse';


import {
  CommonModule
} from '@angular/common';
import {
  CollapsexComponent
} from './collapsex.component';
import {
  CollapsexRouting
} from './collapsex.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    CollapsexRouting,
    CommonModule,
    CollapseModule.forRoot()
  ],
  declarations: [CollapsexComponent
],
  exports: [CollapsexComponent]
})
export class CollapsexModule {}
