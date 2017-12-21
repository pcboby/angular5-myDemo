
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CommonModule
} from '@angular/common';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  BsComponentRouting
} from './bs-component.routing';

import {
  NgModule
} from '@angular/core';

import {
  AlertComponent,
  ModalComponent,
  ButtonsComponent,
  CollapseComponent,
  DatePickerComponent,
  DropdownComponent,
  PaginationComponent,
  PopOverComponent,
  ProgressbarComponent,
  TabsComponent,
  RatingComponent,
  TooltipComponent,
  TimepickerComponent
} from './components';

import {
  BsComponentComponent
} from './bs-component.component';

@NgModule({
  imports: [
    CommonModule,
    BsComponentRouting,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    BsComponentComponent,
    AlertComponent,
    ModalComponent,
    ButtonsComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent
  ]
})
export class BsComponentModule {}
