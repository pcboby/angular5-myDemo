import {
  FormsModule
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

@NgModule({
  imports: [NgFormRouting, CommonModule, FormsModule],
  declarations: [NgFormComponent, DefaultComponent]
})
export class NgFormModule {}
