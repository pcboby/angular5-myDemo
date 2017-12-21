import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PloginComponent } from './plogin.component';

const routes: Routes = [
    {
      path: '',
      component: PloginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PloginRouting {}
