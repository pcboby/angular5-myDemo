import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollapsexComponent } from './collapsex.component';

const routes: Routes = [
    {
      path: '',
      component: CollapsexComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CollapsexRouting {}
