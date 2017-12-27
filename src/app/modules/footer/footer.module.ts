import {
  CommonModule
} from '@angular/common';
import {
  FooterComponent
} from './footer.component';
import {
  FooterRouting
} from './footer.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    FooterRouting,
    CommonModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
