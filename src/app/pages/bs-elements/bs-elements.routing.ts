import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsElementsComponent } from './bs-elements.component';

const routes: Routes = [
    {
      path: '',
      component: BsElementsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BsElementsRouting {}
