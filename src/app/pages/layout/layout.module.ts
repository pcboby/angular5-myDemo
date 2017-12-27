import {
  HeaderModule,
  SilderModule,
  FooterModule,
  WraperModule,
  QuickbarModule
} from './../../modules';
import {
  LayoutRouting
} from './layout.routing';

import {
  NgModule
} from '@angular/core';

import {
  LayoutComponent
} from './layout.component';

import {
  CommonModule
} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LayoutRouting,
    HeaderModule,
    SilderModule,
    FooterModule,
    WraperModule,
    QuickbarModule
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
