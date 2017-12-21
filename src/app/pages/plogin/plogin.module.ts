import { PloginRouting } from './plogin.routing';

import { NgModule } from '@angular/core';

import { PloginComponent } from './plogin.component';

@NgModule({
    imports: [
      PloginRouting
    ],
    declarations: [
    PloginComponent
]
})
export class PloginModule {}
