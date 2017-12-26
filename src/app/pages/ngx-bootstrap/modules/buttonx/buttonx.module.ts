import {ButtonsModule} from 'ngx-bootstrap/buttons';

import {
  CommonModule
} from '@angular/common';
import {
  ButtonxComponent
} from './buttonx.component';
import {
  ButtonxRouting
} from './buttonx.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    ButtonxRouting,
    CommonModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ButtonxComponent],
  exports: [ButtonxComponent]
})
export class ButtonxModule {}
