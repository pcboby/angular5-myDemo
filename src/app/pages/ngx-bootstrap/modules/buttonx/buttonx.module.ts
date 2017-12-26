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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    ButtonxRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ButtonxComponent],
  exports: [ButtonxComponent]
})
export class ButtonxModule {}
