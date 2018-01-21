
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
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
import { ReactiveComponent } from './components/reactive/reactive.component';
@NgModule({
  imports: [NgFormRouting, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [NgFormComponent, DefaultComponent, DrivenComponent, ReactiveComponent]
})
export class NgFormModule {}
