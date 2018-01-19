import {
    NgChartsComponent
  } from './ng-charts.component';
  import {
    NgChartsRouting
  } from './ng-charts.routing';
  
  import {
    NgModule
  } from '@angular/core';
  
  
  @NgModule({
    imports: [
      NgChartsRouting
    ],
    declarations: [NgChartsComponent
  ]
  })
  export class NgChartsModule {}
  