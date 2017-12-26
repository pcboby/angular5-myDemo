import {PaginationModule} from 'ngx-bootstrap/pagination';


import {
  CommonModule
} from '@angular/common';
import {
  TablesComponent
} from './tables.component';
import {
  TablesRouting
} from './tables.routing';
import { FormsModule } from '@angular/forms';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    TablesRouting,
    CommonModule,
    Ng2TableModule,
    FormsModule,
    PaginationModule.forRoot()

  ],
  declarations: [TablesComponent],
  exports: [TablesComponent]
})
export class TablesModule {}
