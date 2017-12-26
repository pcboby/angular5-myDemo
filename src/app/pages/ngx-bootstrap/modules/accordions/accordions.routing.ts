import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionsComponent } from './accordions.component';

const routes: Routes = [
    {
      path: '',
      component: AccordionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccordionsRouting {}
