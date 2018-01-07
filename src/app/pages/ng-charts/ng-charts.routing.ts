import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgChartsComponent } from './ng-charts.component';

const routes: Routes = [
    {
      path: '',
      component: NgChartsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgChartsRouting {}
