import {
  CommonModule
} from '@angular/common';
import {
  HeaderComponent
} from './header.component';
import {
  HeaderRouting
} from './header.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    HeaderRouting,
    CommonModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
