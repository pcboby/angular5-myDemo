

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CommonModule
} from '@angular/common';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  NgBootstrapRouting
} from './ng-bootstrap.routing';

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
  TimepickerComponent,
  TypeaheadComponent
} from './components';

import {
  NgBootstrapComponent
} from './ng-bootstrap.component';

@NgModule({
  imports: [
    CommonModule,
    NgBootstrapRouting,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    NgBootstrapComponent,
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
    TimepickerComponent,
    TypeaheadComponent
  ]
})
export class NgBootstrapModule {}
