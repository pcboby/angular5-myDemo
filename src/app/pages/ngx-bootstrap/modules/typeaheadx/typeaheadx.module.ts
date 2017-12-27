import {TypeaheadModule} from 'ngx-bootstrap/typeahead';


import {
  CommonModule
} from '@angular/common';
import {
  TypeaheadxComponent
} from './typeaheadx.component';
import {
  TypeaheadxRouting
} from './typeaheadx.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    TypeaheadxRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [TypeaheadxComponent],
  exports: [TypeaheadxComponent]
})
export class TypeaheadxModule {}
