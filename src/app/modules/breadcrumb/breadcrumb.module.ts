import {
  CommonModule
} from '@angular/common';
import {
  BreadcrumbComponent
} from './breadcrumb.component';
import {
  BreadcrumbRouting
} from './breadcrumb.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    BreadcrumbRouting,
    CommonModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {}
