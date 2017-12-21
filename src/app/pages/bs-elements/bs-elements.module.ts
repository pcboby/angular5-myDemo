import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  BsElementsComponent
} from './bs-elements.component';
import {
  BsElementsRouting
} from './bs-elements.routing';



@NgModule({
  imports: [
    CommonModule,
    BsElementsRouting
  ],
  declarations: [BsElementsComponent]
})
export class BsElementsModule {}
