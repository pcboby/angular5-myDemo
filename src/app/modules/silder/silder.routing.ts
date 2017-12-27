import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilderComponent } from './silder.component';

const routes: Routes = [
    {
      path: '',
      component: SilderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SilderRouting {}
