import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WraperComponent } from './wraper.component';

const routes: Routes = [
    {
      path: '',
      component: WraperComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WraperRouting {}
