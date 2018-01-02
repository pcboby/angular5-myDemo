import {
    TabsModule
  } from 'ngx-bootstrap';

  import {
    CommonModule
  } from '@angular/common';
  import {
    TabsxComponent
  } from './tabsx.component';
  import {
    TabsxRouting
  } from './tabsx.routing';

  import {
    NgModule
  } from '@angular/core';


  @NgModule({
    imports: [
      TabsxRouting,
      CommonModule,
      TabsModule.forRoot()
    ],
    declarations: [TabsxComponent
  ],
    exports: [TabsxComponent]
  })
  export class TabsxModule {}
