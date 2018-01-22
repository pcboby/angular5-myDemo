import {
  FormsModule, ReactiveFormsModule
} from '@angular/forms';
import { ValidatorsModule } from 'ngx-validators';
import {
  NgFormComponent
} from './ng-form.component';
import {
  NgFormRouting
} from './ng-form.routing';

import {
  NgModule
} from '@angular/core';
import {
  DefaultComponent
} from './components/default/default.component';
import {
  CommonModule
} from '@angular/common/';
import {
  DrivenComponent
} from './components/driven/driven.component';
import {
  ReactiveComponent
} from './components/reactive/reactive.component';
import { UniversalValidatorComponent } from './components/universal-validator/universal-validator.component';
import { ReactiveValidatorComponent } from './components/reactive-validator/reactive-validator.component';
@NgModule({
  imports: [
    NgFormRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ValidatorsModule
  ],
  declarations: [
    NgFormComponent,
    DefaultComponent,
    DrivenComponent,
    ReactiveComponent,
    UniversalValidatorComponent,
    ReactiveValidatorComponent
  ]
})
export class NgFormModule {}
