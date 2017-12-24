import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  BootstrapComponent
} from './bootstrap.component';
import {
  BootstrapRouting
} from './bootstrap.routing';



@NgModule({
  imports: [
    CommonModule,
    BootstrapRouting
  ],
  declarations: [BootstrapComponent]
})
export class BootstrapModule {}
