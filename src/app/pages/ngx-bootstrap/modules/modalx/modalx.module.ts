import {
  ModalModule
} from 'ngx-bootstrap';

import {
  CommonModule
} from '@angular/common';
import {
  ModalxComponent,
  ModalContentComponent
} from './modalx.component';
import {
  ModalxRouting
} from './modalx.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    ModalxRouting,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [ModalxComponent, ModalContentComponent],
  entryComponents: [ModalContentComponent],
  exports: [ModalxComponent]
})
export class ModalxModule {}
