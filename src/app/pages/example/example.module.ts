import { Ng2TableModule } from 'ng2-table/ng2-table';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { BreadcrumbModule } from './../../modules';
import {
  ExampleComponent
} from './example.component';
import {
  ExampleRouting
} from './example.routing';

import { CommonModule } from '@angular/common';
import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule,
    FormsModule,
    ExampleRouting,
    BreadcrumbModule,
    PaginationModule.forRoot()
  ],
  declarations: [ExampleComponent
]
})
export class ExampleModule {}
