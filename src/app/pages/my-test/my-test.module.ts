import {
    MyTestComponent
} from './my-test.component';
import {
    MyTestRouting
} from './my-test.routing';

import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../../modules';
import { DirectiveComponent, PipeComponent, NavComponent } from './components';


@NgModule({
    imports: [
        MyTestRouting,
        CommonModule,
        BreadcrumbModule
    ],
    declarations: [MyTestComponent, DirectiveComponent, PipeComponent, NavComponent]
})
export class MyTestModule { }
