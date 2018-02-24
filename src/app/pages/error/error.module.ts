import {
  ErrorComponent
} from './error.component';
import {
  ErrorRouting
} from './error.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    ErrorRouting
  ],
  declarations: [ErrorComponent
]
})
export class ErrorModule {}
