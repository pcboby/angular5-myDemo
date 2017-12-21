import { SignupRouting } from './signup.routing';

import { NgModule } from '@angular/core';

import { SignupComponent } from './signup.component';

@NgModule({
    imports: [
      SignupRouting
    ],
    declarations: [SignupComponent
]
})
export class SignupModule {}
